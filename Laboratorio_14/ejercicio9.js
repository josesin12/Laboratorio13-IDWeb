function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.hypot(x2 - x1, y2 - y1);
    const distOrigenP1 = Math.hypot(x1, y1);
    const distOrigenP2 = Math.hypot(x2, y2);
    const sumaDistanciasOrigen = distOrigenP1 + distOrigenP2;

    console.log(`Punto 1: (${x1}, ${y1}), Punto 2: (${x2}, ${y2})`);
    console.log(`Distancia entre P1 y P2: ${distancia.toFixed(2)}`);
    console.log(`Suma de distancias al origen: ${sumaDistanciasOrigen.toFixed(2)}`);
}
calcularDistancia(1, 1, 4, 5);