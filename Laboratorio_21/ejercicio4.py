import time

class Libro:
    def __init__(self, titulo, autor, anio, disponible=True):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.disponible = disponible

    def prestar(self):
        if self.disponible:
            self.disponible = False
            return f"Libro '{self.titulo}' prestado"
        else:
            return f"Libro '{self.titulo}' no disponible"

    def devolver(self):
        if not self.disponible:
            self.disponible = True
            return f"Libro '{self.titulo}' devuelto"
        else:
            return f"Libro '{self.titulo}' ya estaba disponible"

    def __str__(self):
        estado = "Disponible" if self.disponible else "Prestado"
        return f"Título: {self.titulo}, Autor: {self.autor}, Año: {self.anio}, Estado: {estado}"

class LibroDigital(Libro):
    def __init__(self, titulo, autor, anio, formato, tamanoMB):
        super().__init__(titulo, autor, anio, disponible=True)
        self.formato = formato
        self.tamanoMB = tamanoMB

    def prestar(self):
        return f"Libro Digital '{self.titulo}' accedido. Siempre disponible"

    def devolver(self):
        return f"Acceso a Libro Digital '{self.titulo}' finalizado"

    def __str__(self):
        base_info = super().__str__()
        return f"{base_info} (Digital) | Formato: {self.formato}, Tamaño: {self.tamanoMB}MB"

class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)
        print(f"'{libro.titulo}' agregado a la biblioteca")

    def listar_libros(self):
        print(" Listado de Libros")
        if not self.libros:
            print("No hay libros")
            return
        for libro in self.libros:
            print(libro)

    def buscar_por_autor(self, autor):
        print(f"\n--- Búsqueda por Autor: {autor} ---")
        encontrados = [libro for libro in self.libros if libro.autor.lower() == autor.lower()]
        if encontrados:
            for libro in encontrados:
                print(libro)
        else:
            print(f"No se encontraron libros del autor '{autor}'.")

    def prestar_libro(self, titulo):
        for libro in self.libros:
            if libro.titulo.lower() == titulo.lower():
                print(libro.prestar())
                return
        print(f"Error: Libro '{titulo}' no encontrado.")


biblioteca = Biblioteca()

libro_f1 = Libro("El tunel", "Ernesto Sabato", 1948)
libro_f2 = Libro("Rayuela", "Julio Cortázar", 1963)
libro_f3 = Libro("Cien años de soledad", "Gabriel García Márquez", 1967)
libro_d1 = LibroDigital("Patrones de Diseño", "Erich Gamma", 1994, "PDF", 45)
libro_d2 = LibroDigital("Aprende Python", "Mark Lutz", 2013, "EPUB", 80)

biblioteca.agregar_libro(libro_f1)
biblioteca.agregar_libro(libro_f2)
biblioteca.agregar_libro(libro_f3)
biblioteca.agregar_libro(libro_d1)
biblioteca.agregar_libro(libro_d2)

biblioteca.listar_libros()

print("Pruebas de Préstamos")
biblioteca.prestar_libro("El tunel")

print("Préstamo Digital 5 veces")
for i in range(5):
    biblioteca.prestar_libro("Patrones de Diseño")

print("Intentar Prestar libro ya prestado")
biblioteca.prestar_libro("El tunel")

print(" Devolver libro")
print(libro_f1.devolver())

biblioteca.buscar_por_autor("Gabriel García Márquez")

biblioteca.listar_libros()