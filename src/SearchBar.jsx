import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Introduce un nombre"
      />
    </div>
  );
}

export default SearchBar;
