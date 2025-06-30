import CabecalhoImagem from "./CabecalhoImagem";
import "../../estilos/cabecalhos/CabecalhoGeral.css";

export default function CabecalhoPerfilUsuario() {
    return (
        <CabecalhoImagem>
            <header className="cabecalhoGeral">
                <h1>Nome do Artista</h1>
                <button>Página Inicial</button>
                <button>Criar Perfil</button>
            </header>
        </CabecalhoImagem>
    );
}