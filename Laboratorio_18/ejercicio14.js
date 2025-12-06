
const regexSeparador = /[!.?]\s*/; 

const textoLargo = "Hola, ¿qué tal? Estoy bien. Vamos por ello!";
const oracionesSeparadas = textoLargo.split(regexSeparador)
    .filter(o => o.trim() !== ""); 

console.log("== Oraciones Separadas ==");
console.log(oracionesSeparadas); 