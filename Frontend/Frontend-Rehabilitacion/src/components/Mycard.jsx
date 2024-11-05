import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '../components/Button';
import '../Style/mycard.css';  // Asegúrate de importar los estilos correctamente
import { useNavigate } from 'react-router-dom';

// Componente Mycard que recibe varias props para mostrar información de un centro
const Mycard = ({ nombre, descripcion, imagen, id, btnEliminar, btnEditar, mostrarBotones }) => {
  const navigate = useNavigate(); // Para obtener la funcion de navegacion

  // Función para manejar la acción de visitar el centro
  const manejarVistar = () => {
    navigate(`/centros/${id}`, { state: { centro: { nombre, descripcion, imagen, id } } });
  };

  return (
    <div>
      <Card className='cartas'>
        <Card.Img variant="top" src={imagen} /> {/* Imagen del centro */}
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Button titulo="Visitar" type="button" evento={manejarVistar} />
          {mostrarBotones ? (  // Condicional para mostrar botones de eliminar y editar
            <>
              <Button className='btn btn-danger' titulo="Eliminar" type="button" evento={btnEliminar} />
              <Button className='btn btn-warning' titulo="Editar" type="button" evento={btnEditar} />
            </>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Mycard;

// exportar componente para seru usado donde lo necesite