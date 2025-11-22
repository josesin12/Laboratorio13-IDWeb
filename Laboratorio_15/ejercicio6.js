
const itemsLista = document.querySelectorAll('li');

itemsLista.forEach(item => {

    item.classList.add('resaltado');
    
    item.classList.remove('oculto');
});
console.log('E6: Clases de elementos <li> modificadas.');