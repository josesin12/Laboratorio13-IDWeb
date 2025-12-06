function mostrarStats() {
  let valor = document.getElementById("entrada").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    .then(res => res.json())
    .then(data => {

      let html = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="">
        <h3>Stats base:</h3>
        <ul>
      `;

      // Recorrer cada estadística
      data.stats.forEach(stat => {
        html += `<li>${stat.stat.name}: ${stat.base_stat}</li>`;
      });

      html += "</ul>";

      document.getElementById("resultado").innerHTML = html;
    })
    .catch(error => {
      document.getElementById("resultado").innerHTML = "<p>Pokémon no encontrado.</p>";
      console.log("Error:", error);
    });
}
