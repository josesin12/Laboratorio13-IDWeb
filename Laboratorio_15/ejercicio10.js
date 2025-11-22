
const nuevoH3 = document.createElement('h3');
nuevoH3.textContent = "Título H3 insertado antes del primer párrafo (E10)";
const primerParrafo = document.querySelector('p');

if (primerParrafo) {
    const padre = primerParrafo.parentNode;
    padre.insertBefore(nuevoH3, primerParrafo);
    console.log('Nuevo h3 insertado antes del primer párrafo.');
}