
function carritoDeCompras() {
    let totalParcial = 0;
    let continuar = true;

    do {
        let precioInput = prompt("Ingresa el precio del producto (o 'n' para terminar): ");
        if (precioInput === null || precioInput.toLowerCase() === 'n') {
            continuar = false;
            continue; 
        }
        const precio = parseFloat(precioInput);

        if (isNaN(precio) || precio <= 0) {
            alert("Precio inválido, debe ser un número positivo ");
            continue;
        }
        totalParcial += precio;
        console.log(`Producto agregado, Total parcial actual: $${totalParcial.toFixed(2)}`);
    } while (continuar);
    console.log("Total Parcial a pagar:" +totalParcial.toFixed(2));
    alert(`Total Parcial: $${totalParcial.toFixed(2)}`);

    let descuentoAplicado = 0;
    let mensajeDescuento = "No aplica descuento"; 
    if (totalParcial > 100) {
        descuentoAplicado = totalParcial * 0.10;
        mensajeDescuento = " Tiene un descuento del 10%";
    } else if (totalParcial >= 50 && totalParcial <= 100) {

        descuentoAplicado = totalParcial * 0.05;
        mensajeDescuento = " Gana un cupón de 5%";
    }
    const totalFinal = totalParcial - descuentoAplicado;
    console.log("Mensaje: "+mensajeDescuento);
    console.log("Descuento aplicado:" +descuentoAplicado.toFixed(2));
    console.log("Total Final a pagar:" +totalFinal.toFixed(2));
    alert(mensajeDescuento+"Descuento: "+descuentoAplicado.toFixed(2)+"Total Final:" +totalFinal.toFixed(2));
}