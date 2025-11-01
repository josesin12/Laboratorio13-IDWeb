const aMayusculas = texto => texto.toUpperCase();
const agregarSigno = texto => `${texto}!`;

const componerTransformaciones = (fn1, fn2) => texto => fn2(fn1(texto));


const transformar = componerTransformaciones(aMayusculas, agregarSigno);
console.log(transformar("hola")); 