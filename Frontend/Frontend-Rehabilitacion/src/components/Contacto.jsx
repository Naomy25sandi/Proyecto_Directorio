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
     <input type="text" placeholder='Nombre'/>
     <input type="text" placeholder='Su correo'/>
     <input type="text" placeholder='Mensaje'/>
     </div>
     <p>Email: <a href="mailto:info@renacer.com">info@renacer.com</a></p>
     <p>Teléfono: <a href="tel:+1234567890">(561)85657138 </a></p>

    <Button evento={onClose} titulo='Cerrar'/>
    </div>
 </div>
  )
}

export default Contacto
