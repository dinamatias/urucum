import "../../estilos/PopUps.css";

export default function DeletarConta(props) {
  return (props.clicado ? (
    <div className="popup">
      <div className="popup-content">
        <h2>Deletar Conta</h2>
        <form className="popup-form">
          <p>Tem CERTEZA que deseja DELETAR PERMANENTEMENTE sua conta?</p>
          <p className="texto-vermelho">Essa ação não pode ser desfeita.</p>
          <button className="botao-cancelar" type="submit">Sim, quero deletar a minha conta</button>
          <button type="button" onClick={props.fechar}>Não, quero manter minha conta</button>
        </form>
      </div>
    </div>
  ) : "Pop-Up não está ativo");
}