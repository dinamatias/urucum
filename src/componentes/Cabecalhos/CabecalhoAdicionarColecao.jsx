import CabecalhoImagem from "./CabecalhoImagem";
import "../../estilos/cabecalhos/CabecalhoGeral.css";

export default function CabecalhoAdicionarColecao() {
  return (
    <>
      <CabecalhoImagem>
        <header className="cabecalhoGeral">
          <h1>Adicionar Coleção</h1>
          <button>Página Inicial</button>
          <div className="fotoPerfil"><img src="banco-de-dados.sql" alt="imagem do artista" /></div>
        </header>
      </CabecalhoImagem>
    </>

  );
}