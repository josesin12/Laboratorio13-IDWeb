const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  
  detalles: function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
  }
};

auto.detalles();