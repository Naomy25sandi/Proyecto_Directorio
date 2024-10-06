import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from './Button';
import '../Style/mycard.css'
const Mycard = ({nombre,descripcion,img}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      <Button titulo= "Visitar" type= "submit"/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Mycard

