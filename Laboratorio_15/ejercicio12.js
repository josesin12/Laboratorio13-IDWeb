
const parrafoAReemplazar = document.querySelector('p');

if (parrafoAReemplazar) {
    parrafoAReemplazar.outerHTML = '<div style="border: 1px solid red; padding: 5px;">Párrafo reemplazado (Ejercicio12)</div>';
    console.log('Párrafo reemplazado por un <div>.');
}