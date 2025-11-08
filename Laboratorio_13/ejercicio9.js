
function contarPalabras(texto) {
  const conteo = {};
  
  const textoLimpio = texto.toLowerCase();
  const palabras = textoLimpio.split(' ');
    
  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    
    if (palabra === '') continue;

    if (conteo[palabra]) {
      conteo[palabra]++;
    } else {
      conteo[palabra] = 1;
    }
  }
  
  return conteo;
}

console.log(contarPalabras("sol luna sol sol estrella luna"));
