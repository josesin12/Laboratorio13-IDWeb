let op2
do {
  op2 = parseInt(prompt("1 Estadísticas, 2 Pares en rango, 3 Tabla , 4 Salir"))
  if (op2 === 1) {
    let cantidad = parseInt(prompt("Cantidad de notas"))
    let notas = []
    for (let i = 0; i < cantidad; i++) notas[i] = parseFloat(prompt("Nota"))
    let suma4 = 0
    let max = notas[0]
    let min = notas[0]
    let pares2 = 0
    let mayores = 0
    for (let i = 0; i < cantidad; i++) {
      suma4 += notas[i]
      if (notas[i] > max) max = notas[i]
      if (notas[i] < min) min = notas[i]
      if (notas[i] % 2 === 0) pares2++
    }
    let prom = suma4 / cantidad
    for (let i = 0; i < cantidad; i++) if (notas[i] > prom) mayores++
    alert("Prom: " + prom + "\nMax: " + max + "\nMin: " + min + "\nPares: " + pares2 + "Prom: " + mayores)
  } else if (op2 === 2) {
    let a = parseInt(prompt("Inicio"))
    let b = parseInt(prompt("Fin"))
    let pc = 0, ic = 0
    for (let i = a; i <= b; i++) if (i % 2 === 0) pc++; else ic++
    alert("Pares: " + pc + " Impares: " + ic)
  } else if (op2 === 3) {
    let x = parseInt(prompt("Número"))
    for (let i = 1; i <= 12; i++) console.log(x + " x " + i + " = " + (x * i))
  }
} while (op2 !== 4)
