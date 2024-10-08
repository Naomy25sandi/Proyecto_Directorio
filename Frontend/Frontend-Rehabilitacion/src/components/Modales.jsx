import React from 'react'
import '../Style/modales.css';
import Map from '../components/Map';


const Modales = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>Nuestra ubicacion</h2>
      <Map/>
      <button onClick={onClose}>Cerrar</button>
    </div>
  </div>
  )
}

export default Modales

