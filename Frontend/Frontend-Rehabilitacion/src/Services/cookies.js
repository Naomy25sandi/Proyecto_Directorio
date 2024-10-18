// creamos la funcion con los 3 parametros necesarios: nombre, valor, dias
const crearCookie=(nombre,valor,dias)=>{
    let expira = ""
    if (dias) {
        let date = new Date(); //crea un nuevo objeto Date
        date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));// Actualiza el objeto date con la nueva fecha
        expira = "; expires=" + date.toUTCString(); //representa la fecha de expiracion
    }
    document.cookie = nombre + "=" + (valor || "") + expira + "; path=/";
}// Define el nombre de la cookie seguido de un "=", usamos el valor proporcionado o una cadena vacia
export {crearCookie}

// creamos la funcion 
const traerCookie=(nombre)=> {
    let nameEQ = nombre + "=";// nombre d ela cookie seguido de un (=)
    let cookies = document.cookie.split(';'); //guarda todas las cokies
    for (let i = 0; i < cookies.length; i++) {// iteramos en todas las cookies almacenadas
        let c = cookies[i]; //
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export {traerCookie}

