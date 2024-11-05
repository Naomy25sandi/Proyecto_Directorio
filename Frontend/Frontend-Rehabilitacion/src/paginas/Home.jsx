import React, { useState, useEffect } from 'react';
import Mybarra from '../components/Mybarra';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListaCards from '../components/ListaCards';
import '../Style/Home.css';
import { getBusqueda, GetData } from '../Services/api';
import { traerCookie } from '../Services/cookies';
import Carrousel from '../components/Carrousel';

const Home = () => {
  const [centros, setCentros] = useState([]);// Estado para almacenar la lista de centros
  //const [filteredCentros, setFilteredCentros] = useState([]);; // Estado para almacenar los centros filtrados según la búsqueda
  const esAdmin = traerCookie("super");// Verificamos si el usuario es admin com la cookie
  const [busqueda, setBusqueda] = useState('')
  // useEffect que se ejecuta al montar el component
  useEffect(() => {
    const traerCentros = async () => {
      if (busqueda.trim()) {
        const buscarCentro = await getBusqueda(busqueda)
        setCentros(buscarCentro);
        console.log('Centros encontrados:', buscarCentro);
      } else {
        const getCentros = await GetData('/centros/api/buscar/centros/')
        setCentros(getCentros)
      }
    };
    traerCentros();
    // Llamamos a la función para traer los centros
  }, [busqueda]);// la dependecia la dejamos vacia para se ejecute una sola vez

 

  return (
    <>
      <Navbar />
      <Mybarra onSearch={setBusqueda}/>
      <Carrousel />
      <h1 className="text-center mt-5">Centros de Rehabilitación</h1>
      <div className='lista-centros'>
        {centros.length === 0 ? (
          <h1>No hay centros que coincidan con tu búsqueda</h1>
        ) : (
          <ListaCards cards={centros} mostrarBotones={esAdmin} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;

