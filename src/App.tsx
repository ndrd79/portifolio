import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
