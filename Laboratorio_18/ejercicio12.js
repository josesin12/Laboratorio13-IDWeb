
const regexUrlSegura = /\bhttps:\/\/\S+/g; 

const textoWeb = "Mi web es https://ejemplo.com y la vieja es http://viejo.net";
const encontradas = textoWeb.match(regexUrlSegura);

console.log("== URLs Seguras ==");
console.log(encontradas);