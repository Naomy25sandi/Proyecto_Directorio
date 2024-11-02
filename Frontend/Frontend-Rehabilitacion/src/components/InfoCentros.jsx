import React from 'react';

const InfoCentros = ({ centro }) => {
  return (
    <div className="text-center my-5">
      <h1 className="mb-4">{centro.nombre}</h1>
      {centro.imagen && (
        <img 
          src={centro.imagen} 
          alt={centro.nombre} 
          className="img-fluid rounded mb-3" // Clases de Bootstrap para imagen
        />
      )}
      <p className="lead">{centro.descripcion}</p>
      <p className="mt-3"><strong>Provincia:</strong> {centro.provincia}</p>
      <p><strong>Distrito:</strong> {centro.distrito}</p>
    </div>
  );
};

export default InfoCentros;
