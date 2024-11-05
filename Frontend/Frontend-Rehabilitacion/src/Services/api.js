const API_URL = "http://127.0.0.1:8000/"

// Método para obtener datos
const GetData = async (endpoint) => {
    try {
        //const token = localStorage.getItem('token'); 
        let response = await fetch(`${API_URL}${endpoint}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                // "Authorization": `Bearer ${token}`, //agregar token
            },
        });
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.log(error)
    }
};

const postData = async (obj, endpoint) => {
    try {
        //const token = localStorage.getItem('token'); 
        let response = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                //"Authorization": `Bearer ${token}`, //agregar token
            },
            body: JSON.stringify(obj),
        });

        const respuesta = await response.json();

        if (!response.ok) {
            // Aquí puedes lanzar un error si la respuesta no es ok
            return { success: false, error: respuesta.error || 'Error desconocido' };
        } else {
            return { success: true, data: respuesta };
        }
    } catch (error) {
        console.error("Error en postData:", error);
        return { success: false, error: 'Error en la conexión' };
    }
};


// Método para actualizar datos
const actualizaDatos = async (id, datos, endpoint) => {
    try {
        //const token = localStorage.getItem('token'); 
        const response = await fetch(`${API_URL}${endpoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el producto')
        }

        return await response.json();
    } catch (error) {
        console.error('Error en la función actualizaDatos:', error)
        throw error;
    }
};

// Método para eliminar datos

//centros/ api/centrosDelete/<int:id>
const deleteProductos = async (id, endpoint) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            console.log("Producto eliminado con éxito");
        } else {
            console.log("Error al eliminar el producto");
        }
    } catch (error) {
        console.log(error);
    }
};
const getBusqueda = async (busqueda) => {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/centros/api/buscar/centros/?q=${busqueda}`)
        const data = await peticion.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }

}
// Exportar todos los métodos
export { GetData, postData, actualizaDatos, deleteProductos, getBusqueda };