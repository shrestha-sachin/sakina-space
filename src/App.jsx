import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ForClients from './pages/ForClients';
import ForTherapists from './pages/ForTherapists';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<ForClients />} />
          <Route path="/therapists" element={<ForTherapists />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
