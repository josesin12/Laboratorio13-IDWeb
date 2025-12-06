function cargarMensajeP() {
  return new Promise(resuelve => {
    setTimeout(() => { 
      resuelve("Mensaje cargado con Promesas");
    }, 1000);
  });
}

cargarMensajeP()
  .then(msg => {
    console.log(msg);
  });