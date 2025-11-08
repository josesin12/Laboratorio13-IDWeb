function invertirMap(map) {
  const mapaInvertido = new Map();
  
  for (const [clave, valor] of map.entries()) {
    mapaInvertido.set(valor, clave); 
  }
  
  return mapaInvertido;
}

let capitales = new Map([
  ["Perú", "Lima"],
  ["Chile", "Santiago"]
]);
console.log(invertirMap(capitales));