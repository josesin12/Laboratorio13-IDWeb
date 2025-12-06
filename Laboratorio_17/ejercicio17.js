function cargarMensajeP() {
  return new Promise(res => {
    setTimeout(() => res("Mensaje cargado con Async/Await"), 1000);
  });
}

async function obtenerMensajeA() {
  const msg = await cargarMensajeP(); 
  console.log(msg); 
}

obtenerMensajeA();