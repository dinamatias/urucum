import "../../estilos/PopUps.css";

export default function AlterarSenha(props) {
  return (props.clicado ? (
    <div className="popup">
      <div className="popup-content">
        <h2>Alterar Senha</h2>
        <form className="popup-form">
          <input type="password" placeholder="Senha Atual" maxLength={32} />
          <input type="password" placeholder="Nova Senha" maxLength={32} />
          <div className="botoes-popup">
            <button type="submit">SALVAR</button>
            <button className="botao-cancelar" type="button" onClick={props.fechar}>CANCELAR</button>
          </div>
        </form>
      </div>
    </div>
  ) : "Pop-Up não está ativo");
}