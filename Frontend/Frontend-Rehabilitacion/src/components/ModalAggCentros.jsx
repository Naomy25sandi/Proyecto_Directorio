import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { postData } from '../Services/api';

const ModalAggCentros = ({ mostrar, abrir, cerrar }) => {
  const [nombreCentro, setNombreCentro] = useState('');
  const [provinciaCentro, setProvinciaCentro] = useState('')
  const [distritoCentro, setDistritoCentro] = useState('')
  const [telefonoCentro, setTelefonoCentro] = useState('');
  const [descripcionCentro, setDescripcionCentro] = useState('');
  const [estadoCentro, setEstadoCentro] = useState(false);
  const [precioCentro, setPrecioCentro] = useState('');
  const [imagenCentro, setImagenCentro] = useState('');
  // Función para manejar la carga de imágenes
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onload = (event) => {
        setImagenCentro(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para subir un nuevo centro
  const subirCentro = async () => {
    if (!nombreCentro || !provinciaCentro || !distritoCentro || !telefonoCentro || !descripcionCentro || !precioCentro) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos',
      });
      return;
    }

    const centro = {
      nombre: nombreCentro,
      descripcion: descripcionCentro,
      telefono: telefonoCentro,
      estado: estadoCentro,
      precio: precioCentro,
      imagen: imagenCentro,
      distrito: distritoCentro,
      provincia: provinciaCentro
    };

    const peticion = await postData(centro, 'centros/api/centros/');
    console.log(peticion); //verificando la respuesta


    if (peticion.success) { // error Keylor me ayudo habia un .status===201 
      console.log("Centro agregado con éxito");

      Swal.fire({
        icon: 'success',
        title: 'Agregado',
        text: 'Agregado con éxito',
      });
      cerrar(); // Cerrar modal al agregar con éxito
      setNombreCentro('');
      setProvinciaCentro('');
      setDistritoCentro('')
      setTelefonoCentro('');
      setDescripcionCentro('');
      setPrecioCentro('');
      setImagenCentro('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al agregar',
      });
    }
  };

  return (
    <>

      <Button style={{ display: 'block', marginTop: '20px' }} variant="primary" onClick={abrir}>
        Agregar centro
      </Button>


      <Modal show={mostrar} onHide={cerrar} >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Agregar Centros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Nombre del centro</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del centro"
              onChange={(e) => setNombreCentro(e.target.value)}
            />
            <label>Provincia</label>
            <select
              className="form-control"
              placeholder="Provincia"
              onChange={(e) => setProvinciaCentro(e.target.value)}
            >
              <option selected value={"Provincia"} disabled>Provincia</option>
              <option value={'Alajuela'}>Alajuela</option>
              <option value={'Cartago'}>Cartago</option>
              <option value={'Guanacaste'}>Guanacaste</option>
              <option value={'Heredia'}>Heredia</option>
              <option value={'Limon'}>Limon</option>
              <option value={'San Jose'}>San Jose</option>
              <option value={'Puntarenas'}>Puntarenas</option>
            </select>
            <label>Distrito</label>
            <input
              type="text"
              className="form-control"
              placeholder="Distrito"
              onChange={(e) => setDistritoCentro(e.target.value)}
            />
            <label>Telefono</label>
            <input
              type="text"
              className="form-control"
              placeholder="Telefono"
              onChange={(e) => setTelefonoCentro(e.target.value)}
            />
            <label>Descripción</label>
            <input
              type="text"
              className="form-control"
              placeholder="Descripción"
              onChange={(e) => setDescripcionCentro(e.target.value)}
            />
            <label>Precio</label>
            <input
              type="text"
              className="form-control"
              placeholder="Precio"
              onChange={(e) => setPrecioCentro(e.target.value)}
            />
            <label>Estado</label>
            <input
              type="checkbox"
              onChange={(e) => setEstadoCentro(e.target.checked)}
            />
            <br />
            <label>Imagen</label>
            <input
              type="file"
              className="form-control"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={(handleImage)}

            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrar}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={subirCentro}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAggCentros;

