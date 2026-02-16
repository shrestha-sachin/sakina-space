import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Local API handler plugin — proxies /api/notion-proxy during dev
function notionApiPlugin() {
  return {
    name: 'notion-api',
    configureServer(server) {
      server.middlewares.use('/api/notion-proxy', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.statusCode = 200;
          return res.end();
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          return res.end(JSON.stringify({ error: 'Method not allowed' }));
        }

        // Read request body
        let body = '';
        for await (const chunk of req) body += chunk;

        let parsed;
        try {
          parsed = JSON.parse(body);
        } catch {
          res.statusCode = 400;
          return res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }

        const { type, data } = parsed;

        // Load env vars
        const apiKey = process.env.NOTION_API_KEY;
        const clientDbId = process.env.NOTION_CLIENT_DB_ID;
        const therapistDbId = process.env.NOTION_THERAPIST_DB_ID;

        if (!apiKey) {
          console.error('❌ NOTION_API_KEY not found in .env');
          res.statusCode = 500;
          return res.end(JSON.stringify({ error: 'Missing NOTION_API_KEY in .env file' }));
        }

        let dbId, properties;

        if (type === 'client') {
          dbId = clientDbId;
          if (!dbId) {
            console.error('❌ NOTION_CLIENT_DB_ID not found in .env');
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: 'Missing NOTION_CLIENT_DB_ID in .env file' }));
          }
          properties = {
            'Name': { title: [{ text: { content: data.firstName || '' } }] },
            'Email': { email: data.email || '' },
            'Language': { select: { name: data.language || 'English' } },
            'Cultural Background': { rich_text: [{ text: { content: data.culturalBackground || '' } }] },
            'Support Type': { select: { name: data.supportType || 'Individual Therapy' } },
            'Submitted At': { date: { start: new Date().toISOString() } },
          };
        } else if (type === 'therapist') {
          dbId = therapistDbId;
          if (!dbId) {
            console.error('❌ NOTION_THERAPIST_DB_ID not found in .env');
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: 'Missing NOTION_THERAPIST_DB_ID in .env file' }));
          }
          properties = {
            'Name': { title: [{ text: { content: data.name || '' } }] },
            'Email': { email: data.email || '' },
            'License Type': { select: { name: data.licenseType || '' } },
            'States Licensed': { rich_text: [{ text: { content: data.statesLicensed || '' } }] },
            'Cultural Alignment': { rich_text: [{ text: { content: data.culturalAlignment || '' } }] },
            'Submitted At': { date: { start: new Date().toISOString() } },
          };
        } else {
          res.statusCode = 400;
          return res.end(JSON.stringify({ error: 'Invalid type' }));
        }

        // Call Notion API
        try {
          const notionRes = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
              'Notion-Version': '2022-06-28',
            },
            body: JSON.stringify({
              parent: { database_id: dbId },
              properties,
            }),
          });

          if (!notionRes.ok) {
            const errBody = await notionRes.text();
            console.error('❌ Notion API error:', errBody);
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: 'Notion API error', details: errBody }));
          }

          console.log(`✅ ${type} waitlist entry created in Notion`);
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          return res.end(JSON.stringify({ success: true }));
        } catch (err) {
          console.error('❌ Fetch error:', err.message);
          res.statusCode = 500;
          return res.end(JSON.stringify({ error: err.message }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env files so they're available in process.env
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [
      react(),
      tailwindcss(),
      notionApiPlugin(),
    ],
  };
});
