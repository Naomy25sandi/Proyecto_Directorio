import React from 'react'
import '../Style/modales.css';
import Map from '../components/Map';

// Componente Modales que recibe props isOpen y onClose
const Modales = ({ isOpen, onClose }) => {
  // Si el modal no está abierto (isOpen es false), no renderizamos nada
    if (!isOpen) return null;
  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>Nuestra ubicacion</h2>
      <Map/> {/* Componente que muestra el mapa */}
      <button onClick={onClose}>Cerrar</button>
    </div>
  </div>
  )
}

export default Modales;

