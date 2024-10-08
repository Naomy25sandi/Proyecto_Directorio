import React from 'react'




const Mybarra = () => {
  return (
    <form >
            <div >
                <label htmlFor="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" />
            </div>
            <div>
                <label htmlFor="fechaIngreso">Fecha de Ingreso:</label>
                <input type="date" id="fechaIngreso" />
            </div>
            <div>
                <label htmlFor="tipoTratamiento">Tipo de Tratamiento:</label>
                <input type="text" id="tipoTratamiento" />
            </div>
            <div>
                <label htmlFor="genero">Género:</label>
                <select id="genero">
                    <option value="">Seleccione</option>
                    <option value="masculino">Masculino</option>
                    <option value="mixto">Mixto</option>  
                </select>
            </div>
            <div>
                <label htmlFor="presupuesto">Presupuesto:</label>
                <input type="number" id="presupuesto" />
            </div>
            <button type="submit" >Buscar</button>
        </form>
  )
}

export default Mybarra

