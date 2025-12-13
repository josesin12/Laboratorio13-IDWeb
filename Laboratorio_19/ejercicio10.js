window.onload = function () {
  let contenedor = document.getElementById("pokemones");

  for (let i = 1; i <= 10; i++) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(data => {

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
