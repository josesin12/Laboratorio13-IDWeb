
const targetSection = document.querySelector('#contenedor-principal');

if (targetSection) {
    const nuevoH2 = document.createElement('h2');
    nuevoH2.textContent = "Título nuevo (Ejercicio22)";
    targetSection.prepend(nuevoH2); 

    const nuevoP = document.createElement('p');
    nuevoP.textContent = "Descripción generada ";
    const primerHijo = targetSection.firstElementChild;
    targetSection.insertBefore(nuevoP, primerHijo.nextSibling);

    const listaFinal = document.createElement('ul');
    for (let i = 1; i <= 3; i++) {
        const item = document.createElement('li');
        item.textContent = `Item ${i} de la lista final `;
        listaFinal.appendChild(item);
    }
    targetSection.appendChild(listaFinal); 

    if (nuevoH2) {
        nuevoH2.remove();
        console.log('<h2> original (o nuevo) eliminado de la sección.');
    }
}