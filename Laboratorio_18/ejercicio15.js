
const regexFechaDMY = /^\d{2}\/\d{2}\/\d{4}$/;

console.log("== Regex Fecha (dd/mm/yyyy) ==");
console.log("15/05/2026 (OK):", regexFechaDMY.test("15/05/2026"));
console.log("1/5/2026 (MAL - faltan dígitos):", regexFechaDMY.test("1/5/2026"));
console.log("2026/05/15 (MAL - orden incorrecto):", regexFechaDMY.test("2026/05/15"));