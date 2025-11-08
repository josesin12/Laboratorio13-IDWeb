function generarContrasenaNumerica() {
    let contrasena = "";
    for (let i = 0; i < 6; i++) {
        const digito = numeroAleatorio(0, 9);
        contrasena += digito;
    }
    console.log(`Contraseña de 6 dígitos: ${contrasena}`);
    return contrasena;
}
generarContrasenaNumerica();