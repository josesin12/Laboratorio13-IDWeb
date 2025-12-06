function cargarUsuarioP() {
  const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

  return new Promise(res => {
    setTimeout(() => {
      const user = { id: 202, nombre: "La_Mejor_23" };
      res(user);
    }, tiempo);
  });
}

cargarUsuarioP()
  .then(userObj => {
    console.log(`Usuario cargado: ${userObj.nombre} (ID: ${userObj.id})`);
  });