document.getElementById('btnCargarPromesa').addEventListener('click', () => {
    const URL_USER2 = "https://jsonplaceholder.typicode.com/users/2";

    fetch(URL_USER2)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('La API falló');
            }
            return respuesta.json();
        })
        .then(data => {
            // ¡Pintamos la info en el HTML!
            document.getElementById('nombreP').textContent = data.name;
            document.getElementById('emailP').textContent = data.email;
            document.getElementById('ciudadP').textContent = data.address.city;
        })
        .catch(error => {
            console.error("Algo salió mal al cargar:", error);
            document.getElementById('nombreP').textContent = `ERROR: ${error.message}`;
            document.getElementById('emailP').textContent = '—';
            document.getElementById('ciudadP').textContent = '—';
        });
});