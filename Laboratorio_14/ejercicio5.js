function lanzamientoDeDados() {
    const dado1 = numeroAleatorio(1, 6);
    const dado2 = numeroAleatorio(1, 6);
    const suma = dado1 + dado2;
    console.log(`Dado 1: ${dado1}, Dado 2: ${dado2}. Suma: ${suma}`);
}
lanzamientoDeDados();
