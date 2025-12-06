async function cargarElUsuario10Cool() {
    const URL_BASE = "https://jsonplaceholder.typicode.com/users/10";

    try {
        const respuesta = await fetch(URL_BASE);
        const datosUsuario = await respuesta.json();

        console.log("Usuario 10 con Async/Await listo");
        console.log(`Nombre: ${datosUsuario.name}`);
        console.log(`Usuario: ${datosUsuario.username}`);
        console.log(`Email: ${datosUsuario.email}`);
        
    } catch (error) {
        console.error("¡Algo falló al cargar el usuario! ", error);
    }
}

cargarElUsuario10Cool();