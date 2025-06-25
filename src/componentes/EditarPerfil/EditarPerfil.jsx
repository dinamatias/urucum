import CabecalhoEditarPerfil from '../cabecalhos/CabecalhoEditarPefil';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import '../../estilos/Formulario.css';
import './EditarPerfil.css';

export default function EditarPerfil() {
  return (
    <>
      <CabecalhoEditarPerfil />
      <main className="container">
        <form className="form-container">
          <h2>Informações de Perfil</h2>

          <div id='imagem-usuario'>
            <img src="upload" alt="Faça upload de sua imagem aqui" />
          </div>
          <div className='form-inputs'>
            <input type="text" placeholder="Nome Completo" />
            <input type="text" placeholder="Nome Artístico" />
          </div>


          <textarea placeholder="Mini Biografia" maxLength="500"></textarea>
          <p>Tamanho máximo de 500 caracteres</p>

          <h3>Tags:</h3>
          <button id='adicionar-tag'>+</button>

          <h3>Contato</h3>

          <div className='icones-contato'>
            <FaWhatsapp />
            <input type="text" placeholder="Número do WhatsApp" />
            <FaInstagram />
            <input type="text" placeholder="Usuário do Instagram" />
          </div>

          <h2>Informações da Conta:</h2>

          <div className='form-inputs'>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Alterar Email" />
            <input type="password" placeholder="Senha Atual" />
            <input type="password" placeholder="Alterar Senha" />
            <input type="password" placeholder="Confirme a Nova Senha" />
          </div>

          <div className='deletar-salvar'>
            <button id='deletar-conta'>DELETAR CONTA</button>
            <button id='salvar' type="submit">SALVAR</button>
          </div>
        </form>
      </main>
    </>
  );
}