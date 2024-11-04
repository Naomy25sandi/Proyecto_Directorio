import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import ListaCards from '../components/ListaCards';
import { traerCookie } from '../Services/cookies';
import { GetData } from '../Services/api';
import ModalAggCentros from '../components/ModalAggCentros';
import ModalEditarCentro from '../components/ModalEditar';

const Admin = () => {
  const [centros, setCentros] = useState([]);
  const esAdmin = traerCookie('super');
  const [modalPut, setModalPut] = useState(false);
  const [modal, setModal] = useState(false);
  const [centroModal, setCentroModal] = useState(null);
  


  const traerCentros = async () => {
    const centro = await GetData('centros/api/centros');
    setCentros(centro);
  };

  useEffect(() => {
    traerCentros();
  }, []);

  

  const abrirModal = () => {
    setModal(true);
  };

  const editarCentro = (centro) => {
    setCentroModal(centro);
    setModalPut(true);
    
  };

  const cerrarModal = () => {
    setModal(false);
    setModalPut(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <ModalAggCentros mostrar={modal} cerrar={cerrarModal} abrir={abrirModal} traerCentros={traerCentros}/>
      </div>
      <ListaCards cards={centros} mostrarBotones={esAdmin} btnEditarC={editarCentro} />
      {modalPut && <ModalEditarCentro abrirModal={centroModal} cerrarModal={cerrarModal} />}
      <Footer />
    </div>
  );
};

export default Admin;
