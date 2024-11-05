import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import ListaCards from '../components/ListaCards';
import { traerCookie } from '../Services/cookies';
import { GetData } from '../Services/api';
import ModalAggCentros from '../components/ModalAggCentros';
import ModalEditarCentro from '../components/ModalEditar';

const Admin = () => {
  const [centros, setCentros] = useState([]);// Estado para almacenar la lista de centros
  const esAdmin = traerCookie('super'); // Verificamos si el usuario es admin con la cookie
  const [modalPut, setModalPut] = useState(false);// estado para controlar el modal
  const [modal, setModal] = useState(false);
  const [centroModal, setCentroModal] = useState(null);
  

// Función para traer los centros de la API
  const traerCentros = async () =>{//Realizo el llamado para obtener los centros
    const centro = await GetData('centros/api/centros');//Realizo el llamado para obtener los centros
    setCentros(centro)// actualizo el estado con los datos del objeto centros
  };
// useEffect 
  useEffect(() => {
    traerCentros();
  }, [centros]);

  
// Función para abrir el modal de agregar centros
  const abrirModal = () => {
    setModal(true);
  };
// Función para editar un centro
  const editarCentro = (centro) => {
    setCentroModal(centro);
    setModalPut(true);
    
  };
// Función para cerrar los modales
  const cerrarModal = () => {
    setModal(false);
    setModalPut(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <ModalAggCentros mostrar={modal} cerrar={cerrarModal} abrir={abrirModal} traerCentros={traerCentros}/> {/*Pasamos la función para recargar los centros*/}
      </div>
    <ListaCards cards={centros} mostrarBotones={esAdmin} btnEditarC={editarCentro} /> {/* Condición para mostrar botones si es admin*/}
      {modalPut && <ModalEditarCentro abrirModal={centroModal} cerrarModal={cerrarModal} />}{/* Pasamos la función para editar un centro*/}
      <Footer /> {/*Componente footer */}
    </div>
  );
};

export default Admin; // exportamos
