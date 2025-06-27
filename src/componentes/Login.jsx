import { useNavigate } from "react-router-dom";

import Cabecalho from "./cabecalhos/CabecalhoImagem/CabecalhoImagem";
import "../estilos/Formulario.css";

export default function Login() {
  const navegar = useNavigate();

  const quandoEnviar = (event) => {
    event.preventDefault();
    navegar("/home");
  };

  const quandoCadastro = (event) => {
    event.preventDefault();
    navegar("/");
  };
  
  return (
    <>
      <Cabecalho />
      <main className="container">
        <form className="form-container">
          <h2>LOGIN</h2>
          <div className="form-inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
          </div>
          <button type="submit" onClick={quandoEnviar}>ENTRAR</button>
          <p>Não possui um login? <a href="/" onClick={quandoCadastro}>Cadastre-se</a></p>
        </form>
      </main>
    </>
  );
}
