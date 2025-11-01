function media(numeros) { 
  if (numeros.length === 0) {
    return 0;
  }
  
  const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
  
  return suma / numeros.length;
}


console.log(media(10, 20, 30));    
console.log(media(5, 5, 5, 5, 5));