import "./styles/Carta.css"

import { useState, useEffect } from 'react';

function Carta() {
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informacoes")) || "") //  Obtém dados do pokemon pesquisado
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem("Favoritos")) || []) // Obtém dados dos pokemons favoritos
  const [favoritar, setFavoritar] = useState(false);  // Define a palavra que aparecerá no botão (Favoritar/Favoritado)
  
  useEffect(() => {   // Fica atualizando para atualizar as variáveis
    const timer = setTimeout(() => {
        setInformacoes(JSON.parse(localStorage.getItem("Informacoes") || ""));
        setFavoritos(JSON.parse(localStorage.getItem("Favoritos")) || [])
    }, 100);
    return () => clearTimeout(timer);
  })

  useEffect(() => {   //  Verifica se o pokemon pesquisado está dentro da array de Favoritos
    const timer = setInterval(() => {
      const favoritoExistente = favoritos.find(favorito => favorito.nome === informacoes.nome);
      if (favoritoExistente) {
        setFavoritar(true);
      } else {
        setFavoritar(false);
      }
    }, 100);
    return () => clearInterval(timer);
  })

  const guardarFavorito = () => {
    if (!favoritar) {
      const novoFavorito = [...favoritos, informacoes]; // Cria uma nova array com as informações anteriores e o novo pokemon
      localStorage.setItem("Favoritos", JSON.stringify(novoFavorito));  // Armazena a nova array no local storage
      setFavoritar(true);
    }
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
          <button onClick={guardarFavorito}> <strong> {favoritar ? " ⭐ Favoritado" : "Favoritar"} </strong> </button>
          <br />
          <br />
          </center>
        </section>
      )}
    </>
  );
}

export default Carta;