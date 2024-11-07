import { traerCookie } from "./cookies";

const API_URL = "http://127.0.0.1:8000/" // creamos una constante que almacena nuestro URL de BE

const token = traerCookie("token") // creamos constante token para almacenar en una cookie el token
// Método para obtener datos
const GetData = async (endpoint) => {
    try {

        let response = await fetch(`${API_URL}${endpoint}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                // "Authorization": `Bearer ${token}`, //decidi no usarlo aca para que cualquier persona pudiera utilizarlo
            },
        });
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.log(error)
    }
};
// metodo para crear 
const postData = async (obj, endpoint) => {
    try {

        let response = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`, //agregar token

            },
            body: JSON.stringify(obj),
        });

        const respuesta = await response.json();

        if (!response.ok) {

            return { success: false, error: respuesta.error || 'Error desconocido' };
        } else {
            return { success: true, data: respuesta };
        }
    } catch (error) {
        console.error("Error en postData:", error);
        return { success: false, error: 'Error en la conexión' };
    }
};
// metodo para crear usuarios
const usuariosPost = async (obj, endpoint) => {
    try {

        let response = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify(obj),
        });

        const respuesta = await response.json();

        if (!response.ok) {

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
// /centros/api/centroUpdate/<int:id>
const actualizaDatos = async (id, datos, endpoint) => {
    try {

        const response = await fetch(`${API_URL}${endpoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`, //agregar token
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
            headers: {
                "Authorization": `Bearer ${token}`, //agregar token
            },
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
 // get para la barra de busqueda misma puede acceder cualquier usuario sin necesidad de autenticacion
const getBusqueda = async (busqueda) => {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/centros/api/buscar/centros/?q=${busqueda}`);
        if (!peticion.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        const data = await peticion.json(); // Parseamos la respuesta como JSON
        console.log(data);
        return data; // Devolvemos los resultados
    } catch (error) {
        console.error('Hubo un problema con la búsqueda:', error);
    }
};
// Exportar todos los métodos
export { GetData, postData, actualizaDatos, deleteProductos, getBusqueda, usuariosPost };