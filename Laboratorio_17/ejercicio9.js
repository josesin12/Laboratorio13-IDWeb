function cargarMensaje(terminar) {
  setTimeout(() => { 
    const mensaje = "Mensaje cargado";
    terminar(mensaje); 
  }, 1000); 
}

cargarMensaje(msg => {
  console.log(msg); 
});