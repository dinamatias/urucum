import Cabecalho from "./Cabecalho";
import "../../estilos/cabecalhos/CabecalhoEditarPerfil.css";

export default function CabecalhoAdicionarColecao() {
  return (
    <Cabecalho>
        <header className="cabecalhoEditarPerfil">
            <h1>Adicionar Coleção</h1>
            <button>Página Inicial</button>
            <div className="fotoPerfil"><img src="banco-de-dados.sql" alt="imagem do artista" /></div>
        </header>
    </Cabecalho>
  );
}