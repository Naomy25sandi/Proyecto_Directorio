import { useState, useEffect } from "react"; // Importa hooks de React.
import Swal from "sweetalert2"; // Importa SweetAlert2 para las alertas.
import { actualizaDatos } from "../Services/api"; // Importa la función para actualizar datos.

const ModalEditarCentro = ({ abrirModal, cerrarModal }) => {
  // Definimos estados para cada campo del formulario.
  const [nombreCentro, setNombreCentro] = useState('');// estado para nombre
  const [provinciaCentro, setProvinciaCentro] = useState('');// estado para provincia
  const [distritoCentro, setDistritoCentro] = useState('');// estado distrito
  const [telefonoCentro, setTelefonoCentro] = useState('');// estado telefono
  const [descripcionCentro, setDescripcionCentro] = useState('');//estado descripcion
  const [estadoCentro, setEstadoCentro] = useState(false);// estado para el estado del centro
  const [precioCentro, setPrecioCentro] = useState(''); // estado para el precio
  const [imagenCentro, setImagenCentro] = useState(''); // estado para la imagen

  // Función para manejar la carga de imágenes.
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

  // Se ejecuta cuando se abre el modal.
  useEffect(() => {
    if (abrirModal) {
      // Establece los valores iniciales de los campos del formulario con los datos del centro a editar.
      setNombreCentro(abrirModal.nombre || '');
      setProvinciaCentro(abrirModal.provincia || '');
      setDistritoCentro(abrirModal.distrito || '');
      setTelefonoCentro(abrirModal.telefono || '');
      setDescripcionCentro(abrirModal.descripcion || '');
      setEstadoCentro(abrirModal.estado || false);
      setPrecioCentro(abrirModal.precio || '');
      setImagenCentro(abrirModal.imagen || '');
    }
  }, [abrirModal]); // sepasa abrir modal como dependencia

  // Función para editar el centro.
  const editarCentro = async () => {
    if (
      nombreCentro === '' || provinciaCentro === '' || distritoCentro === '' ||
      telefonoCentro === '' || descripcionCentro === '' || precioCentro === '' ||
      imagenCentro === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
      });
    } else {
      // se crea un objeto para almacenar los nuevos valores a la hora de editar el centro
      const centroEditado = {
        id: abrirModal.id,
        nombre: nombreCentro,
        provincia: provinciaCentro,
        distrito: distritoCentro,
        telefono: telefonoCentro,
        descripcion: descripcionCentro,
        estado: estadoCentro,
        precio: precioCentro,
        imagen: imagenCentro,
      };

      // Envía la solicitud para actualizar el centro.
      const peticion = await actualizaDatos(centroEditado.id, centroEditado, '/centros/api/centrosUpdate');

      // Verifica si la petición fue exitosa.
      if (peticion) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Centro actualizado correctamente',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo actualizar el centro',
        });
      }

      cerrarModal(); // Cierra el modal.
      
    }
  };

  return (
    <div className={`modal fade ${abrirModal ? 'show' : ''}`} style={{ display: abrirModal ? 'block' : 'none' }} tabIndex={-1} aria-hidden={!abrirModal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Editar Centro</h1>
            <button type="button" className="btn-close" onClick={cerrarModal} />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label>Nombre del centro</label>
                <input
                  type="text"
                  value={nombreCentro}
                  onChange={(e) => setNombreCentro(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label>Provincia</label>
                <select
                  value={provinciaCentro}
                  onChange={(e) => setProvinciaCentro(e.target.value)}
                  className="form-control"
                >
                  <option value={"Provincia"} disabled>Provincia</option>
                  <option value={'Alajuela'}>Alajuela</option>
                  <option value={'Cartago'}>Cartago</option>
                  <option value={'Guanacaste'}>Guanacaste</option>
                  <option value={'Heredia'}>Heredia</option>
                  <option value={'Limon'}>Limón</option>
                  <option value={'San Jose'}>San José</option>
                  <option value={'Puntarenas'}>Puntarenas</option>
                </select>
              </div>

              <div className="mb-3">
                <label>Distrito</label>
                <input
                  type="text"
                  value={distritoCentro}
                  onChange={(e) => setDistritoCentro(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label>Teléfono</label>
                <input
                  type="text"
                  value={telefonoCentro}
                  onChange={(e) => setTelefonoCentro(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label>Descripción</label>
                <input
                  type="text"
                  value={descripcionCentro}
                  onChange={(e) => setDescripcionCentro(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label>Estado</label>
                <input
                  type="checkbox"
                  checked={estadoCentro}
                  onChange={(e) => setEstadoCentro(e.target.checked)}
                />
              </div>

              <div className="mb-3">
                <label>Precio</label>
                <input
                  type="text"
                  value={precioCentro}
                  onChange={(e) => setPrecioCentro(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label>Imagen</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={handleImage}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={cerrarModal}>
              Cerrar
            </button>
            <button type="button" className="btn btn-primary" onClick={editarCentro}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarCentro; // Exporta el componente.
