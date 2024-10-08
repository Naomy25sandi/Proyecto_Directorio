import React from 'react'
import '../Style/contacto.css'

const Contacto = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
 <div className="modal-overlay">
 <   div className="modal-content">
     <p className='h-5'>Contacto</p>
     <p>Email: <a href="mailto:info@renacer.com">info@renacer.com</a></p>
     <p>Teléfono: <a href="tel:+1234567890">(561)85657138 </a></p>

    <button onClick={onClose}>Cerrar</button>
    </div>
 </div>
  )
}

export default Contacto
