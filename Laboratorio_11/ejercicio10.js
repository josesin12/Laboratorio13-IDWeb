let op
do {
  op = parseInt(prompt("1 Círculo\n2 Rectángulo\n3 Salir"))
  if (op === 1) {
    let r = parseFloat(prompt("Radio"))
    alert(3.1416 * r * r)
  } else if (op === 2) {
    let a = parseFloat(prompt("Base"))
    let b = parseFloat(prompt("Altura"))
    alert(a * b)
  }
} while (op !== 3)
