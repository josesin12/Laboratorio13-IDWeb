function esMultiplo(a, b) {
  if (b === 0) {
    return false;
  }
  return a % b === 0;
}

console.log(esMultiplo(10, 5)); 
console.log(esMultiplo(7, 3));