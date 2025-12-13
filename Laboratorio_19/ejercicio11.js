function buscarTipos() {
  let valor = document.getElementById("entrada").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    .then(res => res.json())
    .then(data => {

      let tipos = data.types.map(t => t.type.name);

      document.getElementById("resultado").innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="Imagen">

        <p><strong>Tipos:</strong> ${tipos.join(", ")}</p>
      `;
    })
    .catch(error => {
      document.getElementById("resultado").innerHTML = "<p>Pokémon no encontrado.</p>";
      console.log("Error:", error);
    });
}
