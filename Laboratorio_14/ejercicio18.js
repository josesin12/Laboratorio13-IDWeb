class ProductoSimple {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Carrito {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto, cantidad = 1) {
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(producto);
        }
        console.log(`Se agregaron ${cantidad}x ${producto.nombre} al carrito.`);
    }
    calcularTotal() {
        const total = this.productos.reduce((suma, producto) => suma + producto.precio, 0);
        return total;
    }
    mostrarResumen() {
        const resumen = {};
        this.productos.forEach(p => {
            resumen[p.nombre] = (resumen[p.nombre] || 0) + p.precio;
        });

        
    }
}