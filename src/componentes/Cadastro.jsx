import Cabecalho from "./cabecalhos/CabecalhoImagem/CabecalhoImagem";
import "../estilos/Formulario.css";

export default function Cadastro() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <form className="form-container">
          <h2>CADASTRO</h2>
          <div className="form-inputs">
            <input type="text" placeholder="Nome Completo" />
            <input type="text" placeholder="Nome Artístico" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme sua senha" />
          </div>
          <button type="submit">CADASTRAR</button>
          <p>Já possui um login? <a href="/login">Faça login</a></p>
        </form>
      </div>
    </>
  );
}
