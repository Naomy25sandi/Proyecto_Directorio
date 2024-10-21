import { useState } from "react";
import { actualizaDatos } from "../Services/api";
const ModalEditar = ({abrirModal,cerrarModal})=> {
    const [nombreCentro, setNombreCentro] = useState(abrirModal.nombre);
    const [direccionCentro, setDireccionCentro] = useState(abrirModal.direccion);
    const [telefonoCentro, setTelefonoCentro] = useState(abrirModal.telefono);
    const [descripcionCentro, setDescripcionCentro] = useState(abrirModal.descripcion);
    const [estadoCentro, setEstadoCentro] = useState(abrirModal.estado);
    const [precioCentro, setPrecioCentro] = useState(abrirModal.precio);
    const [imagenCentro, setImagenCentro] = useState(abrirModal.imagen);

    const editarCentro = async (e) => {
        if(nombreCentro === '' || direccionCentro === '' || telefonoCentro === '' || descripcionCentro === '' || estadoCentro === '' || precioCentro === '' || imagenCentro === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
            })
        }else{
            const centroEditado = {
                id: abrirModal.id,
                nombre: nombreCentro,
                direccion: direccionCentro,
                telefono: telefonoCentro,
                descripcion: descripcionCentro,
                estado: estadoCentro,
                precio: precioCentro,
                imagen: imagenCentro
            }
            const peticion = await actualizaDatos(abrirModal.id,centroEditado, '/centros/api/centrosUpdate');
            console.log(peticion);
            cerrarModal(false);
        }
    }

    return (
        <div className="modal fade show" style={{ display: "block" }} tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Editar Centro</h1>
                <button type="button" className="btn-close" onClick={() => setCentroModal(null)} />
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
                    <label>Dirección</label>
                    <input 
                      type="text" 
                      value={direccionCentro} 
                      onChange={(e) => setDireccionCentro(e.target.value)} 
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
                      type="text" 
                      value={imagenCentro} 
                      onChange={(e) => setImagenCentro(e.target.value)} 
                      className="form-control" 
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setCentroModal(null)}>
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary" onClick={validacionModalCentro}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default ModalEditarCentro;