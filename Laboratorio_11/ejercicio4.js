
function clasificarEdad() {
    let edadInput = prompt("Ingresa tu edad:");
    const edad = parseInt(edadInput);
    let categoria = "";
    if (isNaN(edad) || edad < 0) {
        categoria = "Edad inválida";
    } else if (edad < 12) {
        categoria = "Niño"; 
    } else if (edad >= 12 && edad <= 17) {
        categoria = "Adolescente"; 
    } else if (edad >= 18 && edad <= 59) {
        categoria = "Adulto"; 
    } else { 
        categoria = "Adulto mayor"; 
    }
    console.log("La persona tiene "+edad+" años y es: "+categoria);
    alert("Categoría:" +categoria);
}