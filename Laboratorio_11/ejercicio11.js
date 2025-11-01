let num = prompt("Número")
let n3 = num.length
let suma3 = 0
for (let i = 0; i < n3; i++) {
  let d = parseInt(num[i])
  let pot = 1
  for (let j = 1; j <= n3; j++) pot *= d
  suma3 += pot
}
alert(suma3 == num ? "Armstrong" : "No es Armstrong")
