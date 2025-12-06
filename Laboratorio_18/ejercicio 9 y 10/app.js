import multi from "./multiydivi.js";
import { dividir } from "./multiydivi.js";
import { sumar, restar } from "./sumayresta.js";

function probarCalculadora() {
    const A = 20;
    const B = 4;
    const CERO = 0;

    console.log(`Resultado Suma: ${sumar(A, B)}`);    
    console.log(`Resultado Resta: ${restar(A, B)}`);   
    console.log(`Resultado Multi: ${multi(A, B)}`);
    
    try {
        console.log(`Resultado Divi: ${dividir(A, B)}`); 
        
        
        console.log(`División por CERO: ${dividir(A, CERO)}`); 
    } catch (errorDivision) {
        
        console.error(`Error en división: "${errorDivision.message}"`);
    }
}

probarCalculadora();