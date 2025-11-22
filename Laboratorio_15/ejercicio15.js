
const primerArticle = document.querySelector('article');
const mainContainer = document.querySelector('#contenedor-principal'); 

if (primerArticle && mainContainer) {
    const clonArticle = primerArticle.cloneNode(true);
    clonArticle.querySelector('h3').textContent += ' (Clon Ejercicio15)';
    mainContainer.appendChild(clonArticle);
    console.log('Primer <article> clonado y agregado al contenedor principal.');
}