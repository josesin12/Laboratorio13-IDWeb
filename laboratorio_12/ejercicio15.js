function crearContador(valorInicial = 0) {
  let contador = valorInicial;

  const incrementar = () => {
    contador++;
    return contador;
  };

  const resetear = () => {
    contador = valorInicial;
    return contador;
  };

  return {
    incrementar,
    resetear
  };
}
const miContador = crearContador(10);
console.log(miContador.incrementar());  
console.log(miContador.resetear());