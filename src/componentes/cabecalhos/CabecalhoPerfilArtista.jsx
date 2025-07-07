import CabecalhoImagem from "./CabecalhoImagem/CabecalhoImagem";
import "../../estilos/CabecalhoGeral.css";

import { useNavigate } from "react-router-dom";

export default function CabecalhoPerfilArtista() {

    const artista = {
        nome: "Artista Geraldo",
        nomeArtistico: "O Peixão",
        imagem: "https://via.placeholder.com/150",
        bio: "Esta é uma breve biografia do artista."
    }

  const navigate = useNavigate();

  const quandoPaginaInicial = () => {
    navigate("/pagina-inicial");
  };

  return (
    <>
      <CabecalhoImagem>
        <h1>{artista.nomeArtistico}</h1>
        <div className="botaoPerfil">
          <button onClick={quandoPaginaInicial}>Página Inicial</button>
          <div className="fotoPerfil"><img src={artista.imagem} alt="imagem do artista" /></div>
        </div>
      </CabecalhoImagem>
    </>
  );
}