function cargarUsuario(cb) {
  const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
  
  setTimeout(() => {
    const user = { id: 101, nombre: "El_Crack_99" };
    cb(user); 
  }, tiempo);
}

cargarUsuario(userObj => {
  console.log(`Usuario cargado: ${userObj.nombre} (ID: ${userObj.id})`);
});