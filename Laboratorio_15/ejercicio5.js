
const imagen = document.querySelector('img');

if (imagen) {
    
    imagen.setAttribute('src', 'https://via.placeholder.com/150');
    imagen.setAttribute('alt', 'Nueva imagen placeholder');
    console.log('E5: Atributos de la imagen actualizados.');
}