import "../estilos/Formulario.css";

export default function Cadastro() {
  return (
    <>
      <div className="form-container">
        <form className="form">
          <h2>LOGIN</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">ENTRAR</button>
          <p>Não possui um login? <a href="./paginas/TelaCadastro">Cadastre-se</a></p>
        </form>
      </div>
    </>
  );
}
