import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Saludar from '../components/Saludar';
import Button from '../components/Button';
import { traerCookie, crearCookie } from '../Services/cookies'; // Asumiendo que tienes funciones para manejar cookies
import ModalAggCentros from '../components/ModalAggCentros';
import ModalAggPaciente from '../components/ModalAggPaciente';

const Micuenta = () => {
  const usuario = traerCookie("usuario");
  const apellido = traerCookie("apellido");
  const correo = traerCookie("correo");

  const [isEditing, setIsEditing] = useState(false); // Para saber si estamos en modo de edición
  const [formData, setFormData] = useState({ usuario, apellido, correo });

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para guardar la información editada
  const handleSave = () => {
    // se actualizar las cookies 
    crearCookie("usuario", formData.usuario);
    crearCookie("apellido", formData.apellido);
    crearCookie("correo", formData.correo);
    setIsEditing(false); // Salir del modo de edición
  };

  return (
    <div>
      <Navbar />
      <br />
      <Saludar usuario={formData.usuario} />
      <br />

      {isEditing ? (
        <div>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
          />
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Guardar Cambios</button>
        </div>
      ) : (
        <div>
          <p>Apellido: {formData.apellido}</p>
          <p>Correo: {formData.correo}</p>
          <Button titulo={"Editar Información"} onClick={() => setIsEditing(true)} />
          <div className='flex'>
          <div className="modal-content">
          <form>
             <h2 className='text-center mt-5'>Control de Paciente</h2>
            <input className="input" type="text" placeholder='Tipo de tratamiento'/>
            <input className="input" type="date" placeholder='Fecha de tratamiento'/>
            <input className="input" type="text" placeholder='Duracion de tratamiento'/>
            <Button titulo={'Agregar informacion'}/>
          </form>
          </div>

          <div className="modal-content">
          <form>
             <h2 className='text-center mt-5'>Centros de Rehabilitacion visitados</h2>
            <input className="input" type="text" placeholder='Nombre del centro'/>
            <input className="input" type="date" placeholder='Fecha de Ingreso'/>
            <input className="input" type="text" placeholder='Tipo de tratamiento'/>
            <Button titulo={'Agregar informacion'}/>
          </form>
          </div>
          </div>
          

        </div>
      )}

      <Footer />
    </div>
  );
};

export default Micuenta;



