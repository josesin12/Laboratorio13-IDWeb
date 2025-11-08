function tieneDuplicados(arr) {
  const setUnico = new Set(arr);
  return setUnico.size !== arr.length;
}

console.log(tieneDuplicados([1, 2, 3, 1]));
console.log(tieneDuplicados([1, 2, 3, 4]));