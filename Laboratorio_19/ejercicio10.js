window.onload = function () {
  let contenedor = document.getElementById("pokemones");

  // Hacemos 10 peticiones, una por cada ID
  for (let i = 1; i <= 10; i++) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(data => {

        // Crear una tarjeta por Pokémon
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
          <h3>${data.name}</h3>
          <img src="${data.sprites.front_default}" alt="imagen">
          <p>ID: ${data.id}</p>
        `;

        contenedor.appendChild(tarjeta);
      })
      .catch(err => console.log("Error:", err));
  }
}
