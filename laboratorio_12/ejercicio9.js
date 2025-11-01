const calcularDescuento = function (precio, porcentaje) {
  const descuento = precio * (porcentaje / 100);
  return precio - descuento;
};


console.log(calcularDescuento(100, 10));