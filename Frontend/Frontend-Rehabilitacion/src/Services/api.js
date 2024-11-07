import { traerCookie } from "./cookies";

const API_URL = "http://127.0.0.1:8000/"

const token = traerCookie("token")
// Método para obtener datos
const GetData = async (endpoint) => {
    try {

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