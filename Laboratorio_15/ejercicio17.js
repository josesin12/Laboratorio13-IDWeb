
const contenedorParrafos = document.querySelector('body'); 
const parrafosContainer = contenedorParrafos.querySelectorAll('p');

let arrayParrafos = Array.from(parrafosContainer);

arrayParrafos.sort((a, b) => {
    const textA = a.textContent.toUpperCase();
    const textB = b.textContent.toUpperCase();
    if (textA < textB) return -1;
    if (textA > textB) return 1;
    return 0;
});

console.log('Ejercicio17: Párrafos reordenados alfabéticamente:');
arrayParrafos.forEach(parrafo => {
    contenedorParrafos.appendChild(parrafo);
});