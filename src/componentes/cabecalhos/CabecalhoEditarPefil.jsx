import CabecalhoImagem from "./CabecalhoImagem/CabecalhoImagem";
import "../../estilos/CabecalhoGeral.css";

import { useNavigate } from "react-router-dom";

export default function CabecalhoEditarPerfil() {
  const navigate = useNavigate();

  const quandoPaginaInicial = () => {
    navigate("/pagina-inicial");
  };

  return (
    <>
      <CabecalhoImagem>
        <h1>Editar perfil</h1>
        <div className="botaoPerfil">
          <button onClick={quandoPaginaInicial}>Página Inicial</button>
          <div className="fotoPerfil"><img src="banco-de-dados.sql" alt="imagem do artista" /></div>
        </div>
      </CabecalhoImagem>
    </>
  );
}