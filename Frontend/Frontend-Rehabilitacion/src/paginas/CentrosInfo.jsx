import React from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import InfoCentros from '../components/InfoCentros'; 
import Navbar from '../components/Navbar';

const CentrosInfo = () => {
  const location = useLocation();// accede a la informacion, el estado que se paso al navegar a esta ruta.
  const { centro } = location.state || {}; // Maneja en caso de que no haya estado centro lo inicializa como undefined

  return (
    <div className='container mt-5'>
         <Navbar/>
        {centro ? (
        <InfoCentros centro={centro} /> // si centros tiene un valor se renderiza el componente InfoCentros y se le pasa centro como prop
      ) : (
        <p>No se encontró información del centro.</p>// si centro es undefined se muestra el mensaje.
      )}
      <Footer />
    </div>
  );
};

export default CentrosInfo;
