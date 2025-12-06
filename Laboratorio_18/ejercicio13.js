

const htmlSucio = "<h1>Hola, soy un título</h1> <p>y yo un párrafo.</p>";
const textoLimpio = htmlSucio.replace(regexQuitarTags, "");

console.log("== Texto Limpio ==");
console.log(textoLimpio); 