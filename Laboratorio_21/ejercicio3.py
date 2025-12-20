import math

class FiguraGeometrica:
    def calcular_area(self):
        raise NotImplementedError()

    def calcular_perimetro(self):
        raise NotImplementedError()

    def mostrar_datos(self):
        print(f"--- {self.__class__.__name__} ---")
        print(f"Área: {self.calcular_area():.2f}")
        print(f"Perímetro: {self.calcular_perimetro():.2f}")

class Rectangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return 2 * (self.base + self.altura)

class Triangulo(FiguraGeometrica):
    def __init__(self, lado1, lado2, lado3, altura):
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3
        self.altura = altura

    def calcular_area(self):
        return (self.lado1 * self.altura) / 2

    def calcular_perimetro(self):
        return self.lado1 + self.lado2 + self.lado3

class Circulo(FiguraGeometrica):
    def __init__(self, radio):
        self.radio = radio

    def calcular_area(self):
        return math.pi * (self.radio ** 2)

    def calcular_perimetro(self):
        return 2 * math.pi * self.radio

rectangulo1 = Rectangulo(12, 8)
triangulo1 = Triangulo(5, 5, 5, 4.33)
circulo1 = Circulo(6.5)

lista_figuras = [rectangulo1, triangulo1, circulo1]

for figura in lista_figuras:
    figura.mostrar_datos()