function calcularPotenciasYRaices(numero) {
    const cuadrado = Math.pow(numero, 2);
    const cubo = Math.pow(numero, 3);
    const raizCuadrada = Math.sqrt(numero); 
    console.log(`Cuadrado: ${cuadrado}`);
    console.log(`Cubo: ${cubo}`);
    console.log(`Raíz Cuadrada: ${raizCuadrada}`);
}
calcularPotenciasYRaices(9);