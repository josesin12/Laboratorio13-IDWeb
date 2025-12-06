fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then(res => res.json())
  .then(data => {
    console.log("Sprite de Charizard:", data.sprites.front_default);
  })
  .catch(err => console.log("Error:", err));
