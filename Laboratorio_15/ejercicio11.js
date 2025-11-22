const nuevaLista = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    const item = document.createElement('li');
    item.textContent = `Elemento ${i} (E11)`;
    nuevaLista.appendChild(item); 
}
const sectionDestino = document.querySelector('section');

if (sectionDestino) {
    sectionDestino.appendChild(nuevaLista);
    console.log('E11: Nueva lista insertada en la sección.');
}