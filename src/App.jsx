import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaCadastro from "./paginas/TelaCadastro";
import TelaEditarPerfil from "./paginas/TelaEditarPerfil"
import TelaLogin from "./paginas/TelaLogin";
import PaginaInicial from "./componentes/PaginaInicial/PaginaInicial";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaCadastro />} />
          <Route path="/editar-perfil" element={<TelaEditarPerfil />} />
          <Route path="/login" element={<TelaLogin />} />
          <Route path="/pagina-inicial" element={<PaginaInicial />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
2