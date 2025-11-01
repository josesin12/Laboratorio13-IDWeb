function ejecutarOperacion(fn, x, y) { 
  return fn(x, y); 
}

const sumar = (a, b) => a + b;


console.log(ejecutarOperacion(sumar, 10, 5));