import React from 'react'


const Mybarra = () => {
  return (
    <form>
            <div>
                <label for="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" />
            </div>
            <div>
                <label for="fechaIngreso">Fecha de Ingreso:</label>
                <input type="date" id="fechaIngreso" />
            </div>
            <div>
                <label for="tipoTratamiento">Tipo de Tratamiento:</label>
                <input type="text" id="tipoTratamiento" />
            </div>
            <div>
                <label for="genero">Género:</label>
                <select id="genero">
                    <option value="">Seleccione</option>
                    <option value="masculino">Masculino</option>
                    <option value="mixto">Mixto</option>  
                </select>
            </div>
            <div>
                <label for="presupuesto">Presupuesto:</label>
                <input type="number" id="presupuesto" />
            </div>
            <button type="submit">Buscar</button>
        </form>
  )
}

export default Mybarra

