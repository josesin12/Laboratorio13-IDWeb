function tareaConNumero(num) {
  return new Promise(resuelve => {
    const t = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

    setTimeout(() => {
      console.log(`Procesando ${num}...`);
      resuelve(num);
    }, t);
  });
}

function procesarListaP(numeros) {
  const promesas = numeros.map(num => tareaConNumero(num));
  return Promise.all(promesas);
}

const listaP = [11, 22, 33];
console.log("Iniciando procesamiento con Promesas...");

procesarListaP(listaP)
  .then(() => {
    console.log("---");
    console.log("Proceso completado");
  });