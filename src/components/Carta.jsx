import "./styles/Carta.css"

import { useState, useEffect } from 'react';

function Carta() {
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informacoes")) || "")
  const [favoritar, setFavoritar] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
        setInformacoes(JSON.parse(localStorage.getItem("Informacoes") || ""));
    }, 100);
    return () => clearTimeout(timer);
  })

  const guardarFavorito = () => {
        const favoritos = JSON.parse(localStorage.getItem("Favoritos")) || [];
        const novoFavorito = [...favoritos, informacoes];
        localStorage.setItem("Favoritos", JSON.stringify(novoFavorito));
        setFavoritar(false);
  };
  
  return (
    <>
      {informacoes.nome && (
        <section className="informacoes">
            <center>
          <h1> <strong> {informacoes.nome}</strong> </h1>
          <img src={informacoes.imagem} alt={informacoes.nome} />
          <p>Tipo: <strong> {informacoes.tipo} </strong> </p>
          <p>Habilidades: <strong> {informacoes.habilidades.join(", ")} </strong> </p>
          <p>Estatísticas: <strong> {informacoes.estatistica.join(", ")} </strong> </p>
          <button onClick={guardarFavorito}> <strong> {favoritar ? " ⭐ Favoritado ⭐" : "Favoritar"} </strong> </button>
          <br />
          <br />
          </center>
        </section>
      )}
    </>
  );
}

export default Carta;