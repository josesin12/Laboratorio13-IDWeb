
const todosLosParrafos = document.querySelectorAll('p');
const ultimoParrafo = todosLosParrafos[todosLosParrafos.length - 1];

if (ultimoParrafo) {
    ultimoParrafo.remove();
    console.log('Último párrafo eliminado del DOM.');
}