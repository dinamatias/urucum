import "../estilos/Cadastro.css";


export default function Cadastro() {
  return (
    <>
      <div className="cadastro-container">
        <form className="cadastro-form">
          <h2>CADASTRO</h2>
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="Nome Artístico" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme sua senha" />
          <button type="submit">CADASTRAR</button>
          <p>Já possui um login? <a href="/login">Faça login</a></p>
        </form>
      </div>
    </>
  );
}
