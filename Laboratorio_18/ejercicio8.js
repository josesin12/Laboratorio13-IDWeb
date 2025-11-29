document.getElementById('btnCargarAsync').addEventListener('click', async () => {
    const URL_USER2 = "https://jsonplaceholder.typicode.com/users/2";

    try {
        const respuesta = await fetch(URL_USER2);
        
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const data = await respuesta.json();

        
        document.getElementById('nombreA').textContent = data.name;
        document.getElementById('emailA').textContent = data.email;
        document.getElementById('ciudadA').textContent = data.address.city;
        
    } catch (error) {
        console.error("Algo salió mal al cargar:", error);
        document.getElementById('nombreA').textContent = `ERROR: ${error.message}`;
        document.getElementById('emailA').textContent = '—';
        document.getElementById('ciudadA').textContent = '—';
    }
});