function procesarTexto(texto) {
  function limpiarEspacios(str) {
    return str.trim().replace(/\s\s+/g, ' ');
  }

  function contarPalabras(strLimpio) {
    if (strLimpio === "") return 0;
    return strLimpio.split(' ').length;
  }

  const textoLimpio = limpiarEspacios(texto);
  const totalPalabras = contarPalabras(textoLimpio);

  console.log(`Texto Limpio: "${textoLimpio}"`);
  console.log(`Número de Palabras: ${totalPalabras}`);
  return { textoLimpio, totalPalabras };
}

