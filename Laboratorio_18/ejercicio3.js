function cargarElUsuario10() {
    const URL_BASE = "https://jsonplaceholder.typicode.com/users/10";

    fetch(URL_BASE)
        .then(respuesta => respuesta.json()) 
        .then(datosUsuario => {
            console.log("¡Usuario 10 con Promesas listo!");
            console.log(`Nombre: ${datosUsuario.name}`);
            console.log(`Usuario: ${datosUsuario.username}`);
            console.log(`Email: ${datosUsuario.email}`);
        })
        .catch(error => {
            console.error("Algo falló al cargar el usuario", error);
        });
}

cargarElUsuario10();