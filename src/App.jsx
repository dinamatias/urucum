import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaCadastro from "./paginas/TelaCadastro";
import TelaEditarPerfil from "./paginas/TelaEditarPerfil"
import TelaLogin from "./paginas/TelaLogin";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaCadastro />} />
          <Route path="/editar-perfil" element={<TelaEditarPerfil />} />
          <Route path="/login" element={<TelaLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
2