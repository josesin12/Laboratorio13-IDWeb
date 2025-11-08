function contarLetras(texto) {
  const conteo = {};
  
  const textoLimpio = texto.toLowerCase().replace(/[^a-z]/g, '');
  
  for (const letra of textoLimpio) {
    conteo[letra] = (conteo[letra] || 0) + 1;
  }
  
  return conteo;
}

console.log(contarLetras("banana"));