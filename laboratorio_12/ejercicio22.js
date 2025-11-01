function descargarArchivo(url, callback) {
  console.log("Descargando........."); 
  
  
  setTimeout(() => {
    callback(url);
  }, 1500); 
}

const notificarDescargaCompleta = (url) => {
  console.log(`Descarga completa de ${url}`); 
};


descargarArchivo("https://miweb.com/imagen.jpg", notificarDescargaCompleta);