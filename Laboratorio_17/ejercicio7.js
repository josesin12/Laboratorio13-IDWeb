function provocarYClasificarError() {
    try {
        let x = null;
        let nombre = x.nombre; 
    } catch (e) {
        if (e instanceof TypeError) {
            console.log("TypeError:", e.message);
            console.log("El dato no tiene la estructura esperada"); 
        } else if (e instanceof ReferenceError) {
            console.log("ReferenceError:", e.message);
        } else {
            console.log("Error general:", e.message);
        }
    }
}

provocarYClasificarError();