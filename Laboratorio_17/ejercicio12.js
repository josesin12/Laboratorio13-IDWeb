function procesarLista(lista, callbackFinal) {
  let contador = 0;
  const total = lista.length;

  if (total === 0) {
    callbackFinal("Proceso completado");
    return;
  }

  lista.forEach(item => {
    const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

    setTimeout(() => {
      console.log(`Procesando ${item}...`);
      
      contador++;

      if (contador === total) {
        callbackFinal("Proceso completado");
      }
    }, tiempo);
  });
}

const misNumeros = [7, 14, 21];
console.log("Iniciando procesamiento...");
procesarLista(misNumeros, mensajeFinal => {
  console.log("---");
  console.log(mensajeFinal);
});