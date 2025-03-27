

import { useState, useEffect } from 'react';

function Carta() {
  const [pokemon, setPokemon] = useState(...);
  const [favoritar, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(pokemon.id));
  }, [pokemon.id]);

  const handleFavorite = () => {
    if (favoritar) {
      saveToFavorites(pokemon.id, false);
    } else {
      saveToFavorites(pokemon.id, true);
    }
    setIsFavorite(!favoritar);
  };

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Tipo: {pokemon.type}</p>
      <p>Habilidades: {pokemon.abilities}</p>
      <p>Estatísticas: {pokemon.stats}</p>
      <button onClick={handleFavorite}> {favoritar ? 'Remover dos favoritos' : 'Adicionar aos favoritos'} </button>
    </>
  );
}

export default Carta;