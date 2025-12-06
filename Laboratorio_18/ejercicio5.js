function mostrarSoloNombres() {
    const URL_TODOS = "https://jsonplaceholder.typicode.com/users";

    fetch(URL_TODOS)
        .then(respuesta => respuesta.json())
        .then(listaUsuarios => {
            console.log("¡Lista de Nombres (Promesas)!");
            
            listaUsuarios.forEach(usuario => {
                console.log(usuario.name);
            });
        })
        .catch(error => {
            console.error("Error al cargar la lista:", error);
        });
}

mostrarSoloNombres();