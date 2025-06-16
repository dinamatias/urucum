import CabecalhoAdicionarColecao from "./Cabecalhos/CabecalhoAdicionarColecao";
import "../estilos/Formulario.css";

export default function AdicionarColecao() {
  return (
    <>
        <CabecalhoAdicionarColecao />
        <div className="form-container">
            <form className="form">
                <input type="text" placeholder="Nome da Coleção" />
                <p>Tamanho máximo de 32 caracteres</p>
                <textarea placeholder="Descrição da Coleção" maxLength="500"></textarea>
                <p>Tamanho máximo de 500 caracteres</p>

                <h3 id="titulo-adicionar">Adicionar Obra</h3>

                <div className="adicionar-obra-opcoes">
                    <button id="existente">Obra Existente</button>
                    <button id="nova">Nova Obra</button>
                </div>

                <h3 id="foto-capa">Foto de Capa</h3>
                <h3 id="arquivo">Enviar Arquivo</h3>
                <p>Tamanho máximo: 20mb</p>

          <button type="submit">ADICIONAR COLEÇÃO</button>
        </form>
      </div>
    </>
  );
}