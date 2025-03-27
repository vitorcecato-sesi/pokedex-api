import { useState, useEffect } from 'react';

function Carta() {
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informacoes")) || "")
  const [favoritar, setFavoritar] = useState(false);

  const verificarFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem("Favoritos")) || {};
    setFavoritar(!!favoritos[informacoes.id]);
  };

  useEffect(() => {
    if (informacoes.id) {
      verificarFavorito();
    }
  }, [informacoes.id]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setInformacoes(JSON.parse(localStorage.getItem("Informacoes") || ""));
    }, 100);
    return () => clearTimeout(timer);
  })

  const guardarFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem("Favoritos")) || {};
    if (!favoritos[informacoes.id]) {
      favoritos[informacoes.id] = true;
      localStorage.setItem("Favoritos", JSON.stringify(favoritos));
      setFavoritar(true);
    }
  };
  
  return (
    <>
      {informacoes.nome && (
        <>
          <h1>{informacoes.nome}</h1>
          <img src={informacoes.imagem} alt={informacoes.nome} />
          <p>Tipo: {informacoes.tipo}</p>
          <p>Habilidades: {informacoes.habilidades.join(", ")}</p>
          <p>Estatísticas: {informacoes.estatistica.join(", ")}</p>
          <button onClick={guardarFavorito}> Favoritar </button>
        </>
      )}
    </>
  );
}

export default Carta;