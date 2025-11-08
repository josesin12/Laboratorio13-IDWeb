

function filtrarYTransformar(arr) {
  let sumaTotal = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    
    if (num >= 0) {
      const cuadrado = num * num;
      sumaTotal += cuadrado;
    }
  }
  
  return sumaTotal;
}
console.log(filtrarYTransformar([2, 3, 4, -1, 5])); 
