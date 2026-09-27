import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Sua página principal onde fica o Portfolio
import ProjectDetails from './pages/ProjectDetails.jsx'; // A página de detalhes

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial com o Portfólio completo */}
        <Route path="/" element={<Home />} />

        {/* Página de Detalhes Dinâmica (o :id pega o id do projeto clicado) */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;