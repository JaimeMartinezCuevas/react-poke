import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PokemonResults from './PokemonResults';
import LoadingError from './LoadingError';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setPokemonData(null);
      setError(null);
      return;
    }

    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon no encontrado');
        }
        return response.json();
      })
      .then(data => {
        setPokemonData(data);
        setError(null);
        setIsLoading(false);
      })
      .catch(error => {
        setPokemonData(null);
        setError(error.message);
        setIsLoading(false);
      });
  }, [searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Datos de la pokédex</h1>
      <p className="description">Introduce el nombre de la especie</p>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <LoadingError isLoading={isLoading} error={error} />
      <PokemonResults pokemonData={pokemonData} />
    </div>
  );
}

export default App;
