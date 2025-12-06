function nivelTres() {
  try {
    console.log(a); 
  } catch (e) {
    console.log(`Nivel 2 atrapó el error: ${e.message}`); 
    throw e; 
  }
}

function nivelDos() {
  try {
    nivelTres(); 
  } catch (e) {
    console.log(`Nivel 1 recibió el error: ${e.message}`); 
    throw e; 
  }
}

try {
  nivelDos(); 
} catch (e) {
  console.log(`ERROR FINAL capturado en el nivel superior: ${e.message}`); 
}