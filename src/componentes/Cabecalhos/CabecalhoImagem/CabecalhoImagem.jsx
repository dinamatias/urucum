import logo from "../../../assets/logo-principal.png";
import "./CabecalhoImagem.css";

export default function Cabecalho({ children }) {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Logo URUCUM" />
        {children}
    </header>
  );
}
