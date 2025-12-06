function tareaConNumero(num) {
  return new Promise(res => {
    const t = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    setTimeout(() => {
      console.log(`Procesando ${num}...`);
      res(num);
    }, t);
  });
}

async function procesarListaA(numeros) {
  console.log("Iniciando procesamiento con Async/Await...");
  try {
    await Promise.all(numeros.map(num => tareaConNumero(num)));

    console.log("---");
    console.log("Proceso completado");

  } catch (err) {
    console.error("Error en el procesamiento de la lista:", err);
  }
}

const listaA = [5, 10, 15];
procesarListaA(listaA);