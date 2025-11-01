let limite = parseInt(prompt("Hasta:"))
for (let i = 2; i <= limite; i++) {
  let primo = true
  for (let j = 2; j < i; j++) {
    if (i % j === 0) primo = false
  }
  if (primo) console.log(i)
}
