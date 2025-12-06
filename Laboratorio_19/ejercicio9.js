function buscarPokemon() {
  let id = document.getElementById("pokeId").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {

      let habilidades = data.abilities.map(obj => obj.ability.name);

      document.getElementById("resultado").innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="Imagen del Pokémon">

        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Peso:</strong> ${data.weight}</p>
        <p><strong>Altura:</strong> ${data.height}</p>

        <p><strong>Habilidades:</strong></p>
        <ul>
          ${habilidades.map(h => `<li>${h}</li>`).join("")}
        </ul>
      `;
    })
    .catch(error => {
      document.getElementById("resultado").innerHTML = "<p>Pokémon no encontrado.</p>";
      console.log("Error:", error);
    });
}
