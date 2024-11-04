import React, { useState } from 'react';

const UserModal = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [correo, setCorreo] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de datos (ej. llamar a una API)
    console.log({ nombre, email, telefono, direccion });
    // Cerrar el modal aquí si es necesario
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">
        Agregar Datos Personales
      </button>

      {/* Modal */}
      <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userModalLabel">Agregar Datos Personales</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Correo electrónico</label>
                  <input type="tel" className="form-control" id="telefono" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>
                
                <button type="submit" className="btn btn-primary">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
