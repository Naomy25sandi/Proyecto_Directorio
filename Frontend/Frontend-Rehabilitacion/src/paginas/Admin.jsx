import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import ListaCards from '../components/ListaCards';
import { traerCookie } from '../Services/cookies';
import { GetData } from '../Services/api';
import ModalAggCentros from '../components/ModalAggCentros';

const Admin = () => {
  const [centros, setCentros] = useState([]);
  const esAdmin = traerCookie('super');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const traerCentros = async () => {
      const centro = await GetData('centros/api/centros/');
      setCentros(centro);
    };
    traerCentros();
  }, [centros])

  const abrirModal = () => {
    console.log('Modal abierto');
    setModal(true);
  };

  const cerrarModal = () => {
    setModal(false);
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-3">
        <ModalAggCentros mostrar={modal} cerrar={cerrarModal} abrir={abrirModal} />
      </div>

      <ListaCards cards={centros} mostrarBotones={esAdmin} />

      <Footer />
    </div>
  );
};

export default Admin;
