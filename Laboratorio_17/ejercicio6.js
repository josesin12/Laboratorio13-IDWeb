function validarEdad(edad) {
    if (isNaN(edad) || edad < 0) {
        throw new Error("Edad inválida: La edad debe ser un número positivo.");
    }
    return true;
}

function probarValidacion(valor) {
    try {
        validarEdad(valor);
        console.log("La edad"+valor+"es válida");
    } catch (e) {
        console.error("Error al validar"+valor+","+e.message);
    }
}

probarValidacion(25);
probarValidacion(-5);
probarValidacion("diez");