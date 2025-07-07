import "../../../estilos/PopUps.css";
import styles from "./AdicionarTag.module.css";

import { useState, useEffect } from "react";

export default function AdicionarTag(props) {

  const [pesquisarTag, setPesquisarTag] = useState("");
  const [tagsAdicionadas, setTagsAdicionadas] = useState([]);

    const tags = [
      "Música",
      "Arte",
      "Teatro",
      "Dança",
      "Fotografia",
      "Literatura",
      "Cinema",
      "Design",
      "Arquitetura",
      "Culinária"
    ];

    function AdicionarTag(tag) {
      if (!tagsAdicionadas.includes(tag)) {
        setTagsAdicionadas([...tagsAdicionadas, tag]);
      } else {
        alert("Tag já adicionada!");
      }
    }

    function RemoverTag(tag) {
      setTagsAdicionadas(tagsAntigas => {
        return tagsAntigas.filter(filtro => filtro !== tag);
      });
    }

    // Filtra as tags de acordo com a pesqusa
    const tagsFiltradas = tags.filter(tag =>
      tag.toLowerCase().includes(pesquisarTag.toLowerCase())
    );


    return (props.clicado ? (
      <div className={`popup ${styles.popup}`}>
        <div className={`popup-content ${styles.popupContent}`}>
          <h2>Adicionar Tags</h2>
          <form className={`popup-form ${styles.popupForm}`}>
            <input 
              type="text" 
              placeholder="Pesquise uma Tag" 
              maxLength={32} 
              value={pesquisarTag}
              onChange={(e) => setPesquisarTag(e.target.value)}
            />

            <table className={`tabela-tags ${styles.tabelaTags}`}>
              <thead>
                <tr>
                  <th className={`titulo-tag-disponivel ${styles.tituloTagDisponivel}`}>Tags Disponíveis</th>
                </tr>
              </thead>

              <tbody className={`tabela-tags-body ${styles.tabelaTagsBody}`}>
                {tagsFiltradas.length === 0 ? (
                  <p className={`texto-vermelho ${styles.textoVermelho}`}>Nenhuma tag encontrada.</p>
                ) : (
                  tagsFiltradas.map((tag, i) => (
                    <tr key={i}>
                      <td><button className={`botao-adicionar-tag ${styles.botaoAdicionarTag}`} type="button" onClick={() => AdicionarTag(tag)}>{tag}</button></td>
                    </tr>
                  ))
                )}

              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th className={`titulo-tag-adicionada ${styles.tituloTagAdicionada}`}>Tags Adicionadas</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    {tagsAdicionadas.length > 0 ? (
                      tagsAdicionadas.map((tag, i) => (
                        <div key={i} className={`tag-adicionada ${styles.tagAdicionada}`}>
                          <span className={`botao-tag-adicionada ${styles.botaoTagAdicionada}`} onClick={() => RemoverTag(tag)}>{tag}</span>
                        </div>
                      ))
                    ) : (
                      <p className={`texto-vermelho ${styles.textoVermelho}`}>Nenhuma tag adicionada.</p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="botoes-popup">
              <button type="submit">SALVAR</button>
              <button className="botao-cancelar" type="button" onClick={props.fechar}>CANCELAR</button>
            </div>
          </form>
        </div>
      </div>
    ) : "Pop-Up não está ativo");
  }