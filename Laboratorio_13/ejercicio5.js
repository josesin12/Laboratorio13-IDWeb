

function reordenarPalabras(oracion) {
  let palabras = oracion.split(' ');
  let palabrasMayusculas = [];
  
  for (let i = 0; i < palabras.length; i++) {
    palabrasMayusculas[i] = palabras[i].toUpperCase();
  }
  let n = palabrasMayusculas.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (palabrasMayusculas[j] > palabrasMayusculas[j + 1]) {
        let temp = palabrasMayusculas[j];
        palabrasMayusculas[j] = palabrasMayusculas[j + 1];
        palabrasMayusculas[j + 1] = temp;
      }
    }
  }
  
  return palabrasMayusculas;
}

console.log(reordenarPalabras("sol luna estrella planeta"));
