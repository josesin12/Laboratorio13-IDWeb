
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = "Elemento insertado con JS";

document.body.appendChild(nuevoParrafo);
console.log('Nuevo párrafo agregado al body.');