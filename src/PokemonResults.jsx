import React from 'react';

function PokemonResults({ pokemonData }) {
  return (
    <div>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
        </div>
      )}
    </div>
  );
}

export default PokemonResults;
