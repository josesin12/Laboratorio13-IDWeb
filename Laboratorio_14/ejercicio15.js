class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    mostrarInfo() { 
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    }
}
class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email); 
        this.nivelFidelidad = nivelFidelidad
    }
    mostrarInfo() {
        console.log(`\nTipo: Cliente, Nivel de Fidelidad: ${this.nivelFidelidad}`);
        super.mostrarInfo(); 
    }
}
class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos; 
    }
    mostrarInfo() {
        console.log(`Tipo: Administrador, Permisos: ${this.permisos.join(', ')}`);
        super.mostrarInfo(); 
    }
}
