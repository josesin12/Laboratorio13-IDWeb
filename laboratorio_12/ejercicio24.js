function crearSecuencia(inicio, paso) {
  let valorActual = inicio;
  let primerLlamada = true;

  return function() {
    if (primerLlamada) {
      primerLlamada = false;
      return inicio;
    }
    
    valorActual += paso; 
    return valorActual;
  };
}

const secuencia = crearSecuencia(2, 3); 

console.log(secuencia());
console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 