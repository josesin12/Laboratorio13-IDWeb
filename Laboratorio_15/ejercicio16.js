
const listaMover = document.querySelector('ul'); 
if (listaMover) {
    const ultimoLi = listaMover.lastElementChild;

    if (ultimoLi) {
        listaMover.prepend(ultimoLi);
        console.log('Último <li> movido al principio de la lista.');
    }
}