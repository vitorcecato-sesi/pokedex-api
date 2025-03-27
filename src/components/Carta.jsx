import { useState, useEffect } from 'react';

function Carta() {
  const [informacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || {})
  const [favoritar, setFavoritar] = useState(false);

  useEffect(() => {
    if (informacoes.id) {
      setFavoritar(JSON.parse(localStorage.getItem("Favoritos"))?.includes(informacoes.id) || false);
    }
  }, [informacoes.id]);

  const toggleFavoritar = () => {
    const favoritos = JSON.parse(localStorage.getItem("Favoritos")) || [];
    if (!favoritar) {
      favoritos.push(informacoes.id);
    }
    localStorage.setItem("Favoritos", JSON.stringify(favoritos));
    setFavoritar(true);
  };
  
  return (
    <>
      {informacoes.name && (
        <>
          <h1>{informacoes.nome}</h1>
          <img src={informacoes.image} alt={informacoes.name} />
          <p>Tipo: {informacoes.tipo}</p>
          <p>Habilidades: {informacoes.abilities}</p>
          <p>Estatísticas: {informacoes.stats}</p>
          <button onClick={toggleFavoritar}>Favoritar</button>
        </>
      )}
    </>
  );
}

export default Carta;