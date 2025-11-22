

const listaAnidada = document.createElement('ul');

for (let i = 1; i <= 3; i++) {

    const li = document.createElement('li');
    li.textContent = `Ítem ${i} `; 
    const span = document.createElement('span');
    span.textContent = "Nivel interno (Ejercicio20)";
    span.style.color = 'blue';
    li.appendChild(span);
    listaAnidada.appendChild(li);
}
document.body.appendChild(listaAnidada);
console.log(' Estructura anidada <ul> > <li> > <span> creada.');