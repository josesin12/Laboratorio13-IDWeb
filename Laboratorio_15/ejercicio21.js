
const divContenedor = document.getElementById('contenedor'); 

if (divContenedor) {
    divContenedor.innerHTML = '';
    
    for (let i = 1; i <= 3; i++) {
        const p = document.createElement('p');
        p.textContent = `Párrafo ${i} de Eejercicio21`;
        divContenedor.appendChild(p);
    }
    const nuevosParrafos = divContenedor.querySelectorAll('p');

    if (nuevosParrafos.length >= 2) {
        nuevosParrafos[1].remove(); 
        console.log('Eejercicio21: Segundo párrafo creado dentro del contenedor eliminado.');
    }
}