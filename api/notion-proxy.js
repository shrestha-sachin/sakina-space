// Serverless proxy for Notion API
// Deploy as: Vercel Function, Cloudflare Worker, or Netlify Function
//
// Required environment variables:
//   NOTION_API_KEY        — Your Notion integration token
//   NOTION_CLIENT_DB_ID   — Database ID for client waitlist
//   NOTION_THERAPIST_DB_ID — Database ID for therapist waitlist

const NOTION_API = 'https://api.notion.com/v1/pages';
const NOTION_VERSION = '2022-06-28';

async function createNotionPage(databaseId, properties, apiKey) {
    const response = await fetch(NOTION_API, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'Notion-Version': NOTION_VERSION,
        },
        body: JSON.stringify({
            parent: { database_id: databaseId },
            properties,
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(JSON.stringify(error));
    }

    return response.json();
}

function buildClientProperties(data) {
    return {
        'Name': { title: [{ text: { content: data.firstName || '' } }] },
        'Email': { email: data.email || '' },
        'Language': { select: { name: data.language || 'English' } },
        'Cultural Background': { rich_text: [{ text: { content: data.culturalBackground || '' } }] },
        'Support Type': { select: { name: data.supportType || 'Individual Therapy' } },
        'Submitted At': { date: { start: new Date().toISOString() } },
    };
}

function buildTherapistProperties(data) {
    return {
        'Name': { title: [{ text: { content: data.name || '' } }] },
        'Email': { email: data.email || '' },
        'License Type': { select: { name: data.licenseType || '' } },
        'States Licensed': { rich_text: [{ text: { content: data.statesLicensed || '' } }] },
        'Cultural Alignment': { rich_text: [{ text: { content: data.culturalAlignment || '' } }] },
        'Submitted At': { date: { start: new Date().toISOString() } },
    };
}

// ─── Vercel / Netlify handler ───
export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.NOTION_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Server misconfigured: missing Notion API key' });
    }

    try {
        const { type, data } = req.body;

        let dbId, properties;

        if (type === 'client') {
            dbId = process.env.NOTION_CLIENT_DB_ID;
            properties = buildClientProperties(data);
        } else if (type === 'therapist') {
            dbId = process.env.NOTION_THERAPIST_DB_ID;
            properties = buildTherapistProperties(data);
        } else {
            return res.status(400).json({ error: 'Invalid type. Use "client" or "therapist".' });
        }

        if (!dbId) {
            return res.status(500).json({ error: `Missing database ID for ${type}` });
        }

        await createNotionPage(dbId, properties, apiKey);
        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Notion API error:', err);
        return res.status(500).json({ error: 'Failed to submit to Notion' });
    }
}
