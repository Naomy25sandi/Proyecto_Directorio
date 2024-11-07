import React from 'react'
import Modales from './Modales'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define el componente Footer
const Footer = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);// Estado para controlar si la modal está abierto o cerrado
  // Función para abrir la modal
  const openModal = () => setIsModalOpen(true);
  // Función para cerrar la modal
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();// Navegar
  
  // Fincion para navegar a la pagina acerca de nsoostros
  const AboutUs =()=> {
    navigate('/AcercaNosotros')
  };

  return (
    <div className='container-fluid'>

        <div className="row p-5 bg-secondary text-white">

          <div className="col-xs-12 col-md-lg-6 col-lg-3">
            <p className='h-3' onClick={AboutUs} style={{cursor: 'pointer'}}>Sobre Nosotros</p>
           
          </div>

          <div className="col-xs-12 col-md-lg-6 col-lg-3">
             <p className='h-5' >Políticas y Términos</p>
             <p className='h-5'>Política de privacidad</p>
             <p className='h-5'>Términos de uso</p>
             <p className='h-5'>Aviso legal</p>
          </div>
        {/*contenedor donde se muestra el mapa */}
          <div className="col-xs-12 col-md-lg-6 col-lg-3">
          <a href="#" onClick={openModal}>Nuestra Ubicacion</a>
          <Modales isOpen={isModalOpen} onClose={closeModal} />
          <p>Estamos ubicados en Jardín de Lourdes, Piedades de Santa Ana, Costa Rica.</p>
             
          </div>

          <div className="col-xs-12 col-md-lg-6 col-lg-3">
             <p className='h-5'>Contacto</p>
             <p>Email: <a href="mail">info@renacer.com</a></p>
             <p>Teléfono: <a href="tel">(561)85657138 </a></p>
          </div>
        
        </div>
      
    </div>
  )
}

export default Footer
