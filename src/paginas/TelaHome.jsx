// src/pages/Home.jsx
import React from "react";
import Cabecalho from "../componentes/Cabecalho";
import "../estilos/Home.css"; 

export default function Home() {
  // Simulação de artistas (vazio, será substituído por dados reais depois)
  const artistas = [];

  return (
    <div className="home">
      <Cabecalho />

      <main className="conteudo">
        <h2 className="titulo-vermelho">Página Inicial</h2>
        <p className="subtitulo">Conecte-se com artistas e suas histórias</p>

        <div className="barra-pesquisa">
          <input
            type="text"
            placeholder="Pesquisar por nome ou tag"
            className="campo-pesquisa"
          />
          <span className="icone-lupa">🔍</span>
        </div>

        <div className="galeria-artistas">
          {(artistas.length === 0 ? Array(6).fill(null) : artistas).map((artista, index) => (
            <div key={index} className="card-artista">
              <div className="foto-capa" />
              <div className="foto-perfil" />
              <p className="nome-artista">{artista?.nome || "Nome Artista"}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
