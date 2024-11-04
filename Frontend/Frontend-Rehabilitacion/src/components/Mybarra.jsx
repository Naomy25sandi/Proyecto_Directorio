import React, { useState } from 'react';
import { GetData } from '../Services/api';

const Mybarra = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Llama a la función pasada como prop
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Buscar centros..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Mybarra;


