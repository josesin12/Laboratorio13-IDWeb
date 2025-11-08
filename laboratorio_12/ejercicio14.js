function operacionesMatematicas() {
  const sumar = (a, b) => a + b;
  const restar = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => {
    if (b === 0) return "Error, División por cero";
    return a / b;
  };

  return {
    sumar,
    restar,
    multiplicar,
    dividir
  };
}

const ops = operacionesMatematicas();
console.log(ops.sumar(10, 5));