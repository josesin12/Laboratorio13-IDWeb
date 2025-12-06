function buscarStats() {
  let nombre = document.getElementById("entrada").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(res => res.json())
    .then(data => {

      let tabla = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}">

        <table>
          <tr>
            <th>Estadística</th>
            <th>Valor</th>
          </tr>
      `;

      data.stats.forEach(stat => {
        tabla += `
          <tr>
            <td>${stat.stat.name}</td>
            <td>${stat.base_stat}</td>
          </tr>
        `;
      });

      tabla += "</table>";

      document.getElementById("resultado").innerHTML = tabla;

    })
    .catch(err => {
      document.getElementById("resultado").innerHTML = "<p>Pokémon no encontrado.</p>";
      console.log("Error:", err);
    });
}
