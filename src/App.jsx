import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portifolio';
import ContactSection from './components/contacts';
import ProjectDetails from './components/pages/ProjectDetails'; // Importa a página de detalhes

// Layout com todas as seções da Landing Page principal
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <ContactSection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-[#111111] min-h-screen text-white font-sans">
        <Routes>
          {/* Rota da Página Principal (Landing Page) */}
          <Route path="/" element={<MainLayout />} />

          {/* Rota Dinâmica para os Detalhes do Projeto */}
          <Route 
            path="/project/:id" 
            element={
              <>
                <Navbar />
                <ProjectDetails />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;