function dividirP(n1, n2) {
  return new Promise((ok, error) => {
    setTimeout(() => {
      if (n2 === 0) {
        error(new Error("¡División por cero no permitida!"));
      } else {
        ok(n1 / n2);
      }
    }, 1500);
  });
}

dividirP(100, 10)
  .then(res => {
    console.log(`Resultado de la división: ${res}`);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
  });

dividirP(100, 0)
  .then(res => {
    console.log(`Resultado de la división: ${res}`);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
  });