import "../../estilos/PopUps.css";

export default function AdicionarTag(props) {
  return (props.clicado ? (
    <div className="popup">
      <div className="popup-content">
        <h2>Adicionar Tag</h2>
        <form className="popup-form">
          <input type="text" placeholder="Nova Tag" maxLength={32} />
          <button type="submit">SALVAR</button>
          <button className="botao-cancelar" type="button" onClick={props.fechar}>CANCELAR</button>
        </form>
      </div>
    </div>
  ) : "Pop-Up não está ativo");
}