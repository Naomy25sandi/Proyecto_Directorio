import React from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import InfoCentros from '../components/InfoCentros'; 
import Navbar from '../components/Navbar';

const CentrosInfo = () => {
  const location = useLocation();
  const { centro } = location.state || {}; // Maneja el caso de que no haya estado

  return (
    <div className='container mt-5'>
         <Navbar/>
        {centro ? (
        <InfoCentros centro={centro} /> // Usa el componente InfoCentros
      ) : (
        <p>No se encontró información del centro.</p>
      )}
      <Footer />
    </div>
  );
};

export default CentrosInfo;
