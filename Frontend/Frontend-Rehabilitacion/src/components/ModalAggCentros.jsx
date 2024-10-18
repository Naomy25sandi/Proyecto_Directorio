import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ModalAggCentros = ({mostrar,abrir,cerrar}) => { 
  const [nombreCentro, setNombreCentro] = useState('');
  const [direccionCentro, setDireccionCentro] = useState('');
  const [telefonoCentro, setTelefonoCentro] = useState('');
  const [descripcionCentro, setDescripcionCentro] = useState('');
  const [precioCentro, setPrecioCentro] = useState('');
return (
  <>
    <Button variant="primary" onClick={abrir}>
      Agregar centro
    </Button>

    <Modal show={mostrar} onHide={cerrar}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Centros</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>Nombre del centro</label>
          <input type="text" className="form-control" placeholder="Nombre del centro" onChange={(e)=>setNombreCentro(e.target.value)}/>
          <label>Dirección</label>
          <input type="text" className="form-control" placeholder="Dirección" onChange={(e)=>setDireccionCentro(e.target.value)} />
          <label>Telefono</label>
          <input type="text" className="form-control" placeholder="Telefono" onChange={(e)=>setTelefonoCentro(e.target.value)}/>
          <label>Descripción</label>
          <input type="text" className="form-control" placeholder="Descripción" onChange={(e)=>setDescripcionCentro(e.target.value)}/>
          <label>Precio</label>
          <input type="text" className="form-control" placeholder="Precio"onChange={(e)=>setPrecioCentro(e.target.value)} />
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cerrar}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={cerrar}>
          Guardar 
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}     
export default ModalAggCentros;