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

async function ejecutarDivisionA(a, b) {
  try {
    const res = await dividirP(a, b); 
    console.log(`Resultado de la división (${a}/${b}): ${res}`);
  } catch (err) {
    console.error(`Error de división: ${err.message}`);
  }
}

ejecutarDivisionA(40, 5);
ejecutarDivisionA(40, 0);