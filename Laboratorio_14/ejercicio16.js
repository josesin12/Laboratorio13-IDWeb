class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
    calcularSueldo() {
        return this.sueldoBase;
    }
}


class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }
    calcularSueldo() {
        const sueldoBase = super.calcularSueldo(); 
        const bono = sueldoBase * 0.10;
        return sueldoBase + bono;
    }
}
class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje, experiencia) {
        super(nombre, sueldoBase, lenguaje);
        this.experiencia = experiencia;
    }
    calcularSueldo() {
        const sueldoBase = super.calcularSueldo(); 
        const bonoSenior = this.sueldoBase * 0.25; 
        return this.sueldoBase + bonoSenior;
    }
}