import CabecalhoEditarPefil from './Cabecalhos/CabecalhoEditarPefil';
import '../estilos/Formulario.css'
import '../estilos/EditarPerfil.css';

export default function EditarPerfil() {
  return (
    <>
    <CabecalhoEditarPefil />
        <div className="form-container">
            <form className="form">
                    <h2>Informações de Perfil</h2>
                    <div id='imagem-usuario'>
                        <label htmlFor="upload-perfil" />
                        <img src="upload" alt="Faça upload de sua imagem aqui" />
                    </div>
                    <input type="text" placeholder="Nome Completo" />
                    <input type="text" placeholder="Nome Artístico" />
                    <textarea placeholder="Mini Biografia" maxLength="500"></textarea>
                    <p>Tamanho máximo de 500 caracteres</p>
                    <h3>Tags:</h3>
                    <button id='adicionar-tag'>+</button>
                    <h3>Contato</h3>
                    <div id='imagem-whatsapp'><img src="whatsapp.jpg" alt="Ícone do WhatsApp" /></div>
                    <input type="text" placeholder="Número do WhatsApp" />
                    <div id='imagem-instagram'><img src="instagram.jpg" alt="Ícone do Instagram" /></div>
                    <input type="text" placeholder="Usuário do Instagram" />
        
                    <h2>Informações da Conta:</h2>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Alterar Email"/>
                    <input type="password" placeholder="Senha Atual" />
                    <input type="password" placeholder="Alterar Senha" />
                    <input type="password" placeholder="Confirme a Nova Senha" />
                    <div className='deletar-salvar'>
                        <button id='deletar-conta'>DELETAR CONTA</button>
                        <button id='salvar' type="submit">SALVAR</button>
                    </div>
            </form>
        </div>
    </>
  );
}