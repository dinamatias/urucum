import "../../estilos/PopUps.css";

export default function AlterarEmail(props) {
  return (props.clicado ? (
    <div className="popup">
      <div className="popup-content">
          <h2>Alterar Email</h2>
          <form className="popup-form">
            <input type="email" placeholder="Novo Email" maxLength={64} />
            <div className="botoes-popup">
              <button type="submit">SALVAR</button>
              <button className="botao-cancelar" type="button" onClick={props.fechar}>CANCELAR</button>
            </div>
          </form>
      </div>
    </div>
  ) : "Pop-Up não está ativo");
}