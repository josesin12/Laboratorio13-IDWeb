
let numeroAleatorio = Math.floor(Math.random() * 898) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`)
  .then(res => res.json())
  .then(data => {
    console.log("ID aleatorio:", numeroAleatorio);
    console.log("Nombre del Pokémon:", data.name);
  })
  .catch(err => console.log("Error:", err));
