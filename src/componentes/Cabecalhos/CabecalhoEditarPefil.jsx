import Cabecalho from "./Cabecalho";
import "../../estilos/cabecalhos/CabecalhoEditarPerfil.css";

export default function CabecalhoEditarPerfil() {
  return (
    <Cabecalho>
        <header className="cabecalhoEditarPerfil">
            <h1>Editar perfil</h1>
            <button>Página Inicial</button>
            <div className="fotoPerfil"><img src="banco-de-dados.sql" alt="imagem do artista" /></div>
        </header>
    </Cabecalho>
  );
}