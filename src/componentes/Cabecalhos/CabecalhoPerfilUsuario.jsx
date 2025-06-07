import Cabecalho from "./Cabecalho";
import "../../estilos/Cabecalhos/CabecalhoEditarPerfil.css";

export default function CabecalhoPerfilUsuario() {
    return (
        <Cabecalho>
            <header className="cabecalho-perfil-usuario">
                <h1>Nome do Artista</h1>
                <button>Página Inicial</button>
                <button>Criar Perfil</button>
            </header>
        </Cabecalho>
    );
}