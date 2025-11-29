function usarTryCatchFinally() {
    try {
        console.log("Inicio del bloque try");
        console.log(123()); 
    } catch (e) {
        console.error("falló");
    } finally {
        console.log("siempre se ejecuta");
    }
}

usarTryCatchFinally();