
const parrafos = document.querySelectorAll('p'); 
parrafos.forEach(parrafo => {
    parrafo.textContent = "Texto actualizado dinámicamente"; 
});
console.log('E4: Contenido de todos los párrafos actualizado.');