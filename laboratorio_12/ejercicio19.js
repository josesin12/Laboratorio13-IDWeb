function mostrarDatos(nombre, edad, hobbiesArray) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad} años`);
  
  
  if (Array.isArray(hobbiesArray) && hobbiesArray.length > 0) {
    console.log(`Hobbies: ${hobbiesArray.join(', ')}`);
  } else {
    console.log("Hobbies: Ninguno especificado");
  }
}


mostrarDatos("Elena", 28, ["leer", "pintar", "viajar"]);
