async function mostrarSoloNombresCool() {
    const URL_TODOS = "https://jsonplaceholder.typicode.com/users";

    try {
        const respuesta = await fetch(URL_TODOS);
        const listaUsuarios = await respuesta.json();

        console.log("¡Lista de Nombres (Async/Await)!");
        listaUsuarios.forEach(usuario => {
            console.log(usuario.name);
        });

    } catch (error) {
        console.error("Error al cargar la lista:", error);
    }
}

mostrarSoloNombresCool();