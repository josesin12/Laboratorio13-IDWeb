

function cajeroAutomatico() {
    let montoInput = prompt("Ingrese el monto a retirar (múltiplo de 10): ");
    let montoRestante = parseInt(montoInput);
    
    if (isNaN(montoRestante) || montoRestante <= 0 || montoRestante % 10 !== 0) {
        alert("Monto inválido");
        return;
    }
    const denominaciones = [100, 50, 20, 10];
    let resultado = {};
    console.log("Monto a retirar:" +montoRestante);
    let mensaje = `Se entregan los siguientes billetes para $${montoInput}:\n`;
    for (let i = 0; i < denominaciones.length; i++) {
        const denominacion = denominaciones[i];
        const cantidadBilletes = Math.floor(montoRestante / denominacion);
        if (cantidadBilletes > 0) {
            resultado[denominacion] = cantidadBilletes;
            mensaje += `- ${cantidadBilletes} billete(s) de $${denominacion}\n`;  
            montoRestante %= denominacion;
        }
        if (montoRestante === 0) {
            break;
        }
    }
    if (montoRestante > 0) {
        mensaje += "Sobrante no entregado:" +montoRestante;
    }
    console.log("Resultado detallado:"+ resultado);
    alert(mensaje);
}
