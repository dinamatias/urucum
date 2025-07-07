import CabecalhoEditarPerfil from '../cabecalhos/CabecalhoEditarPefil';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import AlterarEmail from '../pop-ups/AlterarEmail';
import AlterarSenha from '../pop-ups/AlterarSenha';
import AdicionarTag from '../pop-ups/AdicionarTag/AdicionarTag';
import DeletarConta from '../pop-ups/DeletarConta';

import { useState } from 'react';

/*
  Aqui, aprendi por fora como usar o css modular, que foi visto um pouquinho em sala
  mas não lembrava muito bem como aplicar

  Eu queria parte dos dois CSSs funcionando e sem afetar as outras páginas. Aí descobri
  que se usa assim, com um styles e o outro normal mesmo.
*/
import styles from './EditarPerfil.module.css';
import '../../estilos/Formulario.css';

export default function EditarPerfil(props) {

  const [popup, setPopup] = useState(null);

  return (
    <>
      <CabecalhoEditarPerfil />
      <main className={`container ${styles.container}`}>
        <form className={`form-container ${styles.formContainer}`}>
          <h2 className={styles.titulo}>Informações de Perfil</h2>

          <div className={styles.imagemContainer}>
            <div className={styles.imagemUsuario}>
              <img src="upload" alt="Faça upload de sua imagem aqui" />
            </div>
            <div className={styles.botoesAlterar}>
              <button type="button" onClick={() => setPopup("email")}>ALTERAR EMAIL</button>
              <button type="button" onClick={() => setPopup("senha")}>ALTERAR SENHA</button>
            </div>
          </div>

          <div className={`form-inputs ${styles.formInputs}`}>
            <input className={styles.input} type="text" placeholder="Nome Completo" maxLength={64} />
            <input className={styles.input} type="text" placeholder="Nome Artístico" maxLength={64} />
          </div>


          <textarea className={styles.biografia} placeholder="Mini Biografia" maxLength="500"></textarea>
          <p className={styles.textoLimite}>Tamanho máximo de 500 caracteres</p>

          <h3 className={styles.subtitulo}>Tags:</h3>
          <button id={styles.adicionarTag} type="button" onClick={() => setPopup("tags")}>+</button>

          <h3 className={styles.subtitulo}>Contato:</h3>

          <div className={styles.iconesContato}>
            <FaWhatsapp />
            <input className={styles.input} type="number" placeholder="Número do WhatsApp" />
            <FaInstagram />
            <input className={styles.input} type="text" placeholder="Usuário do Instagram" />
          </div>

          <div className={styles.deletarSalvar}>
            <button type="submit">SALVAR</button>
            <button id={styles.deletarConta} type="button" onClick={() => setPopup("deletar")}>DELETAR CONTA</button>
          </div>
        </form>

        {/* Essa parte de pop-up eu tive que pesquisar por fora e fiz junto com o Copilot */}
        {popup === 'email' && <AlterarEmail clicado={true} fechar={() => setPopup(null)} />}
        {popup === 'senha' && <AlterarSenha clicado={true} fechar={() => setPopup(null)} />}
        {popup === 'tags' && <AdicionarTag clicado={true} fechar={() => setPopup(null)} />}
        {popup === 'deletar' && <DeletarConta clicado={true} fechar={() => setPopup(null)} />}
      </main>
    </>
  );
}