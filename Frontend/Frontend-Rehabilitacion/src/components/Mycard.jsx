import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '../components/Button';
import '../Style/mycard.css';
import { useNavigate } from 'react-router-dom';


const Mycard = ({ nombre, descripcion, imagen, id, btnEliminar, btnEditar, mostrarBotones }) => {
  const navigate = useNavigate();

  const manejarVistar =()=>{
    navigate(`/centros/${id}`, {state: {centro: {nombre, descripcion, imagen, id}}});
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Button titulo="Visitar" type="button" evento={manejarVistar}/>
          {mostrarBotones ? (
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
