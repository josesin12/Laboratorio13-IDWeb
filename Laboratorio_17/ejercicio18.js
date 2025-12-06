function cargarUsuarioP() {
  const t = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
  return new Promise(res => {
    setTimeout(() => res({ id: 303, nombre: "Marco_Pro" }), t);
  });
}

async function obtenerUsuarioA() {
  const user = await cargarUsuarioP(); 
  console.log(`Usuario cargado: ${user.nombre} (ID: ${user.id})`);
}

obtenerUsuarioA();