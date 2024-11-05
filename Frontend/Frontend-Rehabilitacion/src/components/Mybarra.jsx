import React, { useState } from 'react';
import { getBusqueda, GetData } from '../Services/api';

const Mybarra = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async(e) => {
    e.preventDefault();

    if(query.trim()){
      try {
        const centroE= await getBusqueda(query)
        onSearch(centroE)
      } catch (error) {
        console.error('Error al buscar',error);
        
      }
    }
    
  };

  return (
    <form className='d-flex' onSubmit={handleSearch}>
      <input className="form-control me-2"
        type="text" 
        placeholder="Buscar centros" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button className="btn btn-primary" type="submit">Buscar</button>
    </form>
  );
};

export default Mybarra;


