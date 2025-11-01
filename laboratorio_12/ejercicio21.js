function filtrarArreglo(arr, callback) {
  let resultado = [];
  let indiceResultado = 0; 

  for (let i = 0; i < arr.length; i++) {
    
    if (callback(arr[i])) {
      
      resultado[indiceResultado] = arr[i];
      indiceResultado++;    
    }
  }
  return resultado;
}

const esImpar = num => num % 2 !== 0;
const numeros = [1, 2, 3, 15, 6, 21, 8];
const impares = filtrarArreglo(numeros, esImpar);
console.log(impares); // [1, 3, 15, 21]