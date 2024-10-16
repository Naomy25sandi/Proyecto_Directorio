import React from 'react'
import Button from './Button';
import '../Style/contacto.css'

const Contacto = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
 <div className="modal-overlay">
 <   div className="modal-content">
     <p className='h-5'>Contactenos</p>
     <div className='input_container'>
     <input className='input' type="text" placeholder='Nombre'/>
     <input className='input' type="text" placeholder='Su correo'/>
     <input className='input2' type="text" placeholder='Mensaje'/>
     </div>
     <a href="mailto:info@renacer.com">Email:info@renacer.com</a>
     <a href="tel:+1234567890">Teléfono:(561)85657138 </a>

    <Button evento={onClose} titulo='Cerrar'/>
    </div>
 </div>
  )
}

export default Contacto
