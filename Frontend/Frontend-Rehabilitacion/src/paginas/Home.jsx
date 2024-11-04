import React, { useState, useEffect } from 'react';
import Mybarra from '../components/Mybarra';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListaCards from '../components/ListaCards';
import '../Style/Home.css';
import { GetData } from '../Services/api';
import { traerCookie } from '../Services/cookies';
import Carrousel from '../components/Carrousel';

const Home = () => {
  const [centros, setCentros] = useState([]);
  const [filteredCentros, setFilteredCentros] = useState([]);
  const esAdmin = traerCookie("super");

  useEffect(() => {
    const traerCentros = async () => {
      try {
        const centro = await GetData('centros/api/centros/');
        setCentros(centro);
        setFilteredCentros(centro); // Inicialmente mostrar todos los centros
      } catch (error) {
        console.error('Error al traer centros:', error);
        
      }
    };
    traerCentros();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredCentros(centros); // Si no hay búsqueda, mostrar todos
    } else {
      const filtered = centros.filter(centro =>
        centro.nombre.toLowerCase().includes(query.toLowerCase()) // Cambia "nombre" por la propiedad que desees filtrar
      );
      setFilteredCentros(filtered);
    }
  };

  return (
    <>
      <Navbar />
      <Mybarra onSearch={handleSearch} />
      <Carrousel />
      <h1 className="text-center mt-5">Centros de Rehabilitación</h1>
      <div className='lista-centros'>
        {filteredCentros.length === 0 ? (
          <h1>No hay centros que coincidan con tu búsqueda</h1>
        ) : (
          <ListaCards cards={filteredCentros} mostrarBotones={esAdmin} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;

