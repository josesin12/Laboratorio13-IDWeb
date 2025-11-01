function acumulador(valorInicial) {
  let acumulado = valorInicial;

  return function(nuevoValor) {
    acumulado += nuevoValor;
    return acumulado;
  };
}
const sumarAlAcumulado = acumulador(100);
console.log(sumarAlAcumulado(10));