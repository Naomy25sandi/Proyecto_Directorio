const API_URL = "http://127.0.0.1:8000/";

// Método para obtener datos
const GetData = async (endpoint) => {
    try {
        console.log(endpoint);
        let response = await fetch(`${API_URL}${endpoint}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
            },
        });
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
};

// Método para crear datos
const postData = async (obj, endpoint) => {
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
            // Swal.fire({
            //     icon: 'error',
            //     title: "Error en la petición",
            //     text: respuesta.error,
            // })
            console.log(respuesta.error);

        } else {
            console.log(respuesta.success);
            // Swal.fire({
            //     icon: 'success',
            //     title: "Exito",
            //     text: respuesta.success,
            // })
        }
        return respuesta
    } catch (error) {
        console.log(error);
    }
};

// Método para actualizar datos
const actualizaDatos = async (id, datos, endpoint) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el producto');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en la función actualizaDatos:', error);
        throw error;
    }
};

// Método para eliminar datos
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

// Exportar todos los métodos
export { GetData, postData, actualizaDatos, deleteProductos };