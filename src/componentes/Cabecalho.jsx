import "../estilos/Cabecalho.css";
import logo from "../assets/logo-principal.png";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Logo URUCUM" />
    </header>
  );
}
