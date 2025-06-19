import Cabecalho from "./cabecalhos/CabecalhoImagem/CabecalhoImagem";
import "../estilos/Formulario.css";

export default function Login() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <form className="form-container">
          <h2>LOGIN</h2>
          <div className="form-inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
          </div>
          <button type="submit">ENTRAR</button>
          <p>Não possui um login? <a href="./paginas/TelaCadastro">Cadastre-se</a></p>
        </form>
      </div>
    </>
  );
}
