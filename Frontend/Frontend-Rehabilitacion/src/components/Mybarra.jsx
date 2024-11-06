import React, { useState } from 'react';
//import { getBusqueda, GetData } from '../Services/api';

const Mybarra = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event)=>{
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    console.log('onSearch:', query);  
  };

  return (
    <>
    <form className='d-flex' onSubmit={handleSubmit}>
      <input className="form-control me-2"
        type="text" 
        placeholder="Buscar centros" 
        value={query} 
        onChange={handleChange} 
      />
      <button className="btn btn-primary"  type="submit">Buscar</button>
    </form>
    </>
  );
};

export default Mybarra;


