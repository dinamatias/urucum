import CabecalhoImagem from "./CabecalhoImagem";
import "../../estilos/cabecalhos/CabecalhoGeral.css";


export default function CabecalhoAdicionarObra() {

  const artista = {
        nome: "Artista Geraldo",
        nomeArtistico: "O Peixão",
        imagem: "https://via.placeholder.com/150",
        bio: "Esta é uma breve biografia do artista."
    }
    
  return (
    <>
      <CabecalhoImagem>
        <header className="cabecalhoGeral">
          <h1>Adicionar Obra</h1>
          <button>Página Inicial</button>
          <div className="fotoPerfil"><img src="banco-de-dados.sql" alt="imagem do artista" /></div>
        </header>
      </CabecalhoImagem>
    </>
  );
}