
class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.precio = precio; 
        this.stock = stock;
    }
    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return `$${this.#precio.toFixed(2)}`;
    }

    get stock() {
        return this.#stock;
    }

    set precio(valor) {
        const nuevoPrecio = Number(valor); 
        if (nuevoPrecio > 0) {
            this.#precio = nuevoPrecio;
        } else {
            console.log(` El precio debe ser mayor a 0. Se mantuvo el valor anterior: $${this.#precio.toFixed(2)}`);
        }
    }
    set stock(valor) {
        if (valor >= 0) {
            this.#stock = valor;
        } else {
            console.log(`El stock no puede ser negativo. Se mantuvo el valor anterior: ${this.#stock}`);
        }
    }
    vender(cantidad) {
        if (cantidad <= 0 || !Number.isInteger(cantidad)) {
            console.log(`Cantidad de venta inválida.`);
            return false;
        }
        if (this.#stock >= cantidad) {
            this.#stock -= cantidad;
            console.log(`Venta exitosa. Se vendieron ${cantidad} unidades de ${this.#nombre}. Stock restante: ${this.#stock}`);
            return true;
        } else {
            console.log(`Stock insuficiente. Solo quedan ${this.#stock} unidades de ${this.#nombre}.`);
            return false;
        }
    }
}
const leche = new Producto("Leche", 3.49, 100);
console.log(`Producto: ${leche.nombre}, Precio: ${leche.precio}, Stock: ${leche.stock}`);
leche.precio = "5.99";
console.log(`Nuevo precio (cadena): ${leche.precio}`);

leche.precio = -10; 
leche.vender(10);
leche.vender(95); 