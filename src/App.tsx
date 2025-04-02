import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Areas from "./pages/Areas";
import CadastrarArea from "./pages/CadastrarArea";
import Processos from "./pages/Processos";
import SubProcess from "./pages/SubProcess";
import Ferramentas from "./pages/Ferramentas";
import Documentos from "./pages/Documentos";
import Responsaveis from "./pages/Responsaveis";
import CadastroProcesso from "./pages/CadastrarProcesso";
import CadastrarSubProcesso from "pages/CadastrarSubProcesso";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/areas" element={<Areas />} />
              <Route path="/cadastrar-area" element={<CadastrarArea />} />
              <Route path="/processos" element={<Processos />} />
              <Route path="/processos/cadastrar" element={<CadastroProcesso />} />
              <Route path="/subprocessos" element={<SubProcess />} />
              <Route path="/cadastro-subprocesso" element={<CadastrarSubProcesso />} />
              <Route path="/ferramentas" element={<Ferramentas />} />
              <Route path="/documentos" element={<Documentos />} />
              <Route path="/responsaveis" element={<Responsaveis />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;