const preciosProductos = new Map([
  ["Leche", 3.50],
  ["Pan", 1.20],
  ["Huevos", 5.00],
  ["Cereal", 4.80]
]);

const listaCompras = ["Leche", "Huevos", "Leche", "Cereal"];

function calcularPrecioTotal(mapaPrecios, lista) {
  let total = 0;
  
  for (const producto of lista) {
    total += mapaPrecios.get(producto) || 0;
  }
  return total;
}

console.log(`Precio Total: S/. ${calcularPrecioTotal(preciosProductos, listaCompras).toFixed(2)}`);