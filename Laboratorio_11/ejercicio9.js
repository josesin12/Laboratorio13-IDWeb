let N = parseInt(prompt("N"))
let suma2 = 0
for (let i = 1; i <= N; i++) {
  if (i % 5 !== 0) suma2 += i
}
alert("Suma: " + suma2)
