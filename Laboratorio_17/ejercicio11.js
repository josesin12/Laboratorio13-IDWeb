function dividirAsync(num1, num2, resultadoCallback) {
  setTimeout(() => {
    if (num2 === 0) {
      resultadoCallback(new Error("No se puede dividir entre cero"), null); 
    } else {
      const res = num1 / num2;
      resultadoCallback(null, res); 
    }
  }, 1500);
}

dividirAsync(15, 3, (error, resultado) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`Resultado de la división: ${resultado}`);
  }
});

dividirAsync(15, 0, (error, resultado) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`Resultado de la división: ${resultado}`);
  }
});