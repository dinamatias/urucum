import CabecalhoImagem from "./CabecalhoImagem/CabecalhoImagem";
import "../../estilos/CabecalhoGeral.css";

export default function CabecalhoPaginaInicial() {
  return (
    <>
      <CabecalhoImagem>
        <h1>Página Inicial</h1>
        <div className="botaoPerfil">
          <div className="fotoPerfil"><img src="banco-de-dados.sql" alt="imagem do artista" /></div>
        </div>
      </CabecalhoImagem>
    </>
  );
}