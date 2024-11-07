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
  const esAdmin = traerCookie("super");// Verificamos si el usuario es admin com la cookie
  //const [busqueda, setBusqueda] = useState();
// si es necesario usar useEffect???


  const traerCentros = async (query) => {
     try{
      const data = await getBusqueda(query)
      setCentros(data);
      
      } catch (error) {
        console.error('Error fetching articles:', error)

    };
  }     
 
  return (
    <>
      <Navbar />
      <br /> <br />
      <Mybarra onSearch={traerCentros}/>
      <br /><br />
      <Carrousel />
      <h1 className="text-center mt-5">Centros de Rehabilitación</h1>
      <div className='lista-centros'>
        {centros.length === 0 ? (
          <h2 className='text-center mt-5'>No hay centros que coincidan con tu búsqueda</h2>
        ) : (
          <ListaCards cards={centros} mostrarBotones={esAdmin} />
        )}
      </div>
      
      <Footer />
    </>
  );
};

export default Home;

