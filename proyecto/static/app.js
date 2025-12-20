

console.log("JS cargado correctamente");

async function cargarEquipos() {
    const res = await fetch('/equipos');
    const equipos = await res.json();
    
    const lista = document.getElementById('lista-equipos');
    lista.innerHTML = ""; 
    
    equipos.forEach(e => {
        const item = document.createElement('li');
        item.textContent = `${e.nombre} (${e.ciudad}) - ATK: ${e.nivelAtaque} DEF: ${e.nivelDefensa}`;
        lista.appendChild(item);
    });
}

async function guardarEquipo() {
    const data = {
        nombre: document.getElementById('nom').value,
        ciudad: document.getElementById('ciu').value,
        nivelAtaque: parseInt(document.getElementById('atk').value),
        nivelDefensa: parseInt(document.getElementById('def').value)
    };

    const res = await fetch('/equipos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        alert("Equipo guardado!");
        cargarEquipos(); 
    } else {
        alert("Hubo un error");
    }
}

cargarEquipos();