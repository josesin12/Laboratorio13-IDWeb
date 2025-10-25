
function calcularPromedioConValidacion() {
    const CANTIDAD_NOTAS = 5;
    for (let i = 1; i <= CANTIDAD_NOTAS; i++) {
        let nota;
        let esValida = false;
        do {
            
            nota = parseFloat(prompt("Ingresa la nota "+i+"(entre 0 y 20):"));
            if (!isNaN(nota) && nota >= 0 && nota <= 20) {
                esValida = true;
            } else {
                alert(" La nota debe ser un número entre 0 y 20");
            }
        } while (!esValida);
        sumaNotas += nota;
    }
    const promedio = sumaNotas / CANTIDAD_NOTAS;
    console.log("Suma total de notas: " +sumaNotas);
    console.log(`El promedio de las 5 notas es: ${promedio.toFixed(2)}`);
    alert(`El promedio de las 5 notas es: ${promedio.toFixed(2)}`);
}
