import CabecalhoEditarPerfil from '../cabecalhos/CabecalhoEditarPefil';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

/*
  Aqui, aprendi por fora como usar o css modular, que foi visto um pouquinho em sala
  mas não lembrava muito bem como aplicar

  Eu queria parte dos dois CSSs funcionando e sem afetar as outras páginas. Aí descobri
  que se usa assim, com um styles e o outro normal mesmo.
*/
import styles from './EditarPerfil.module.css';
import '../../estilos/Formulario.css';

export default function EditarPerfil() {
  return (
    <>
      <CabecalhoEditarPerfil />
      <main className={`container ${styles.container}`}>
        <form className={`form-container ${styles.formContainer}`}>
          <h2 className={styles.titulo}>Informações de Perfil</h2>

          <div className={styles.imagemUsuario}>
            <img src="upload" alt="Faça upload de sua imagem aqui" />
          </div>
          <div className={`form-inputs ${styles.formInputs}`}>
            <input className={styles.input} type="text" placeholder="Nome Completo" />
            <input className={styles.input} type="text" placeholder="Nome Artístico" />
          </div>


          <textarea className={styles.biografia} placeholder="Mini Biografia" maxLength="500"></textarea>
          <p className={styles.textoLimite}>Tamanho máximo de 500 caracteres</p>

          <h3 className={styles.subtitulo}>Tags:</h3>
          <button id={styles.adicionarTag}>+</button>

          <h3 className={styles.subtitulo}>Contato</h3>

          <div className={styles.iconesContato}>
            <FaWhatsapp />
            <input className={styles.input} type="text" placeholder="Número do WhatsApp" />
            <FaInstagram />
            <input className={styles.input} type="text" placeholder="Usuário do Instagram" />
          </div>

          <h2>Informações da Conta:</h2>

          <div className={`form-inputs ${styles.formInputs}`}>
            <input className={styles.input} type="text" placeholder="Email" />
            <input className={styles.input} type="text" placeholder="Alterar Email" />
            <input className={styles.input} type="password" placeholder="Senha Atual" />
            <input className={styles.input} type="password" placeholder="Alterar Senha" />
            <input className={styles.input} type="password" placeholder="Confirme a Nova Senha" />
          </div>

          <div className={styles.deletarSalvar}>
            <button id={styles.deletarConta}>DELETAR CONTA</button>
            <button id={styles.salvar} type="submit">SALVAR</button>
          </div>
        </form>
      </main>
    </>
  );
}