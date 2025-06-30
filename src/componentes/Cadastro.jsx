import Cabecalho from "./cabecalhos/CabecalhoImagem/CabecalhoImagem";
import "../estilos/Formulario.css";

import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navegar = useNavigate();

  const quandoEnviar = (event) => {
    event.preventDefault();
    navegar("/editar-perfil");
  };

  const quandoLogin = (event) => {
    event.preventDefault();
    navegar("/login");
  };

  return (
    <>
      <Cabecalho />
      <main className="container">
        <form className="form-container" onSubmit={quandoEnviar}>
          <h2>CADASTRO</h2>
          <div className="form-inputs">
            <input type="text" placeholder="Nome Completo" maxLength={64} />
            <input type="text" placeholder="Nome Artístico" maxLength={64} />
            <input type="email" placeholder="Email" maxLength={32} />
            <input type="password" placeholder="Senha" maxLength={32} />
            <input type="password" placeholder="Confirme sua senha" maxLength={32} />
          </div>
          <button type="submit">CADASTRAR</button>
          <p>Já possui um login? <a href="/login" onClick={quandoLogin}>Faça login</a></p>
        </form>
      </main>
    </>
  );
}
