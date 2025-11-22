
const divsContados = document.querySelectorAll('div');
const conteo = divsContados.length;

const resultadoParrafo = document.createElement('p');
resultadoParrafo.textContent = `Ejercicio19: Hay ${conteo} elementos <div> en el documento.`;
document.body.appendChild(resultadoParrafo);
console.log('Ejercicio19: Conteo de <div>s mostrado dinámicamente.');