function buscarPokemon() {
  let id = prompt("Ingrese un ID de Pokémon del 1 al 898:");

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log("Nombre del Pokémon:", data.name);
    })
    .catch(err => console.log("Error:", err));
}
