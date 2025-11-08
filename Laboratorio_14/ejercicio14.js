class Figura {
    constructor() {
    }
    area() { 
        return 0;
    }
    perimetro() { 
        return 0;
    }
    mostrarInfo() {
        console.log(" Figura Genérica ");
    }
}
class Cuadrado extends Figura {
    constructor(lado) {
        super(); 
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
    perimetro() {
        return 4 * this.lado;
    }
    mostrarInfo() {
        console.log(`Cuadrado (Lado: ${this.lado})  Área: ${this.area()}, Perímetro: ${this.perimetro()}`);
    }
}
class Triangulo extends Figura {
    constructor(base, altura, ladoA, ladoB, ladoC) {
        super();
        this.base = base;
        this.altura = altura;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    area() {
        return (this.base * this.altura) / 2;
    }
    perimetro() {
        return this.ladoA + this.ladoB + this.ladoC;
    }
    mostrarInfo() {
        console.log(`Triángulo (Base: ${this.base}, Altura: ${this.altura})  Área: ${this.area()}, Perímetro: ${this.perimetro()}`);
    }
}
