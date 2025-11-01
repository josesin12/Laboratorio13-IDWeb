let presupuesto = parseFloat(prompt("Presupuesto"))
let total2 = 0
let c
do {
  let pr = parseFloat(prompt("Precio"))
  if (total2 + pr > presupuesto) c = "n"
  else total2 += pr
  if (c !== "n") c = prompt("Agregar otro? s/n")
} while (c === "s")

alert("Total: " + total2)
