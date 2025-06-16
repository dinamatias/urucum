import CabecalhoAdicionarObra from "./Cabecalhos/CabecalhoAdicionarObra";
import "../estilos/Formulario.css";
import "../estilos/AdicionarObra.css";

export default function AdicionarObra() {
  return (
    <>
      <CabecalhoAdicionarObra />
      <div className="form-container">
        <form className="form">
          <h2>ADICIONAR OBRA</h2>
          <input type="text" placeholder="Título da Obra" />
          <p>Tamanho máximo de 32 caracteres</p>
          <textarea placeholder="Descrição da Obra" maxLength="500"></textarea>
          <p>Tamanho máximo de 500 caracteres</p>

          <div>
              <img src="" alt="" />
              <h3>Enviar Arquivo</h3>
              <p>Tamanho máximo de 20mb</p>
          </div>

          <div>
              <button className="cancelar-adicionar" type="submit">ADICIONAR OBRA</button>
              <button id="cancelar">CANCELAR</button>
          </div>
        </form>
      </div>
    </>
  );
}