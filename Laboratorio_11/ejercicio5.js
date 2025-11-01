let pares = 0
let impares = 0
for (let i = 1; i <= 10; i++) {
  let n = parseInt(prompt("Número " + i))
  if (n % 2 === 0) pares++
  else impares++
}
alert("Pares: " + pares + " Impares: " + impares)
