
    let textoInvalido = '{nombre: "Juan"'; 

    try {
        let obj = JSON.parse(textoInvalido);
    } catch (e) {
        console.log("¡Error de Sintaxis capturado!");
        console.log("e.name:", e.name);      
        console.log("e.message:", e.message);  
    }
