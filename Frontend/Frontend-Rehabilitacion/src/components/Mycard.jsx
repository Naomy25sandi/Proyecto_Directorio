import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from './Button';
import '../Style/mycard.css';

const Mycard = ({ nombre, descripcion, imagen, btnEliminar, btnEditar, mostrarBotones }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Button titulo="Visitar" type="submit" />
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
