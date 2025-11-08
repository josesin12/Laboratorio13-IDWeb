

function combinarCatalogos(tiendaA, tiendaB) {
  const catalogoCombinado = {};
  for (let producto in tiendaA) {
    catalogoCombinado[producto] = tiendaA[producto];
  }
  for (let producto in tiendaB) {
    const precioB = tiendaB[producto];
    
    if (catalogoCombinado[producto] !== undefined) {
      const precioA = catalogoCombinado[producto];
      if (precioB < precioA) {
        catalogoCombinado[producto] = precioB;
      }
    } else {
      catalogoCombinado[producto] = precioB;
    }
  }
  for (let producto in catalogoCombinado) {
    const precioFijo = catalogoCombinado[producto].toFixed(2);
    catalogoCombinado[producto] = parseFloat(precioFijo);
  }
  
  return catalogoCombinado;
}
const TiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
const TiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };

console.log(combinarCatalogos(TiendaA, TiendaB));
