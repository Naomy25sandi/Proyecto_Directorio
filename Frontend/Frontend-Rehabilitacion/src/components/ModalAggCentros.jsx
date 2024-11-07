import Modal from 'react-bootstrap/Modal';// importe modal de bootstrap
import Button from 'react-bootstrap/Button';// componente boton
import { useState } from 'react';// importo useState
import Swal from 'sweetalert2';
import { postData } from '../Services/api';// metodo post para crear
import '../Style/modales.css'

const ModalAggCentros = ({ mostrar, abrir, cerrar }) => {// Componente para agregar un nuevo centro
  const [nombreCentro, setNombreCentro] = useState(''); // Estado para guardar el nombre del centro
  const [provinciaCentro, setProvinciaCentro] = useState('')// Estado para la provincia.
  const [distritoCentro, setDistritoCentro] = useState('')// Estado para el distrito.
  const [telefonoCentro, setTelefonoCentro] = useState('');// Estado para el telefono
  const [descripcionCentro, setDescripcionCentro] = useState('');// Estado para la descripción
  const [estadoCentro, setEstadoCentro] = useState(false);// Estado para saber si el centro está activo o no.
  const [precioCentro, setPrecioCentro] = useState('');// Estado para el precio
  const [tratamientos, setTratamientos] = useState([]);// Estado para la lista de tratamientos
  const [tratamientoInput, setTratamientoInput] = useState('');// Estado para el input del tratamiento
  const [imagenCentro, setImagenCentro] = useState('');// Estado para la imagen del centro.
  const [recarga, setRecarga] = useState(false);// Estado para controlar la recarga de la página.


  // Función para manejar la carga de imágenes
  const handleImage = (e) => {
    const file = e.target.files[0];// Toma el primer archivo del input
    const reader = new FileReader();// Crea un nuevo lector de archivos.

    if (file) { // Si hay un archivo seleccionado
      reader.onload = (event) => {
        setImagenCentro(event.target.result);// Guarda el resultado (la imagen) en el estado
      };
      reader.readAsDataURL(file);// Lee el archivo como una URL de datos.
    }
  };

  const recargaPag = () => {// Función para recargar la página
    setRecarga(!recarga) //Cambia el estado recarga para forzar una recarga de la página.
  }

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
    // Crea un objeto centro con la información ingresada.
    const centro = {
      nombre: nombreCentro,
      descripcion: descripcionCentro,
      telefono: telefonoCentro,
      estado: estadoCentro,
      precio: precioCentro,
      imagen: imagenCentro,
      distrito: distritoCentro,
      provincia: provinciaCentro,
    }


    // Envía la solicitud para crear el centro.
    const peticionCrearCentro = await postData(centro, 'centros/api/centros/');
    

    // Verifica si la creación del centro fue exitosa.
    if (peticionCrearCentro.success) { // error Keylor me ayudo habia un .status===201 
      console.log("Centro agregado con éxito");

      Swal.fire({
        icon: 'success',
        title: 'Agregado',
        text: 'Agregado con éxito',
      });
      recargaPag(); // Llama a la función para recargar.
      cerrar();  // Cerrar modal al agregar con éxito
      setNombreCentro('');
      setProvinciaCentro('');
      setDistritoCentro('')
      setTelefonoCentro('');
      setDescripcionCentro('');
      setPrecioCentro('');
      setImagenCentro('');
      await traerCentros(); // Llama a la función para traer los centros actualizado

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
        <Modal.Header>
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
              <option value={"Provincia"} disabled>Provincia</option>
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
          <Button style={{width: 200}} variant="secondary" onClick={cerrar}>
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

