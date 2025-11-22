const divs = document.querySelectorAll('div');
const colores = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc']; 

divs.forEach((div, index) => {
    const colorIndex = index % colores.length;
    div.style.backgroundColor = colores[colorIndex];
});
console.log('Ejercicio8: Color de fondo de los <div> cambiado.');