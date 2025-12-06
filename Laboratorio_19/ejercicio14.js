let listaPokemon = [];  
let indice = 0;          

window.onload = function () {

  for (let i = 1; i <= 12; i++) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(data => {
        listaPokemon.push(data);

        if (listaPokemon.length === 12) {
          mostrarPokemon();
        }
      })
      .catch(err => console.log("Error:", err));
  }

};

function mostrarPokemon() {
  let contenedor = document.getElementById("pokemones");
  contenedor.innerHTML = "";


  for (let i = indice; i < indice + 3; i++) {


    if (i >= 0 && i < listaPokemon.length) {

      let p = listaPokemon[i];

      let tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");

      tarjeta.innerHTML = `
        <h3>${p.name}</h3>
        <img src="${p.sprites.front_default}">
        <p>ID: ${p.id}</p>
      `;

      contenedor.appendChild(tarjeta);
    }
  }
}

function siguiente() {
  if (indice + 3 < listaPokemon.length) {
    indice += 3;
    mostrarPokemon();
  }
}

function anterior() {
  if (indice - 3 >= 0) {
    indice -= 3;
    mostrarPokemon();
  }
}
