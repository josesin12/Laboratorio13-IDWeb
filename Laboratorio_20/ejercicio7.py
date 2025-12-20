def agregar_estudiante(estudiantes):
    nombre = input("Nombre: ").strip()
    edad = int(input("Edad: "))
    promedio = float(input("Promedio: "))

    estudiante = {
        "nombre": nombre,
        "edad": edad,
        "promedio": promedio
    }

    estudiantes.append(estudiante)
    print("Estudiante agregado correctamente.\n")


def mostrar_estudiantes(estudiantes):
    if not estudiantes:
        print("No hay estudiantes registrados\n")
        return

    for e in estudiantes:
        print(f"Nombre: {e['nombre']}, Edad: {e['edad']}, Promedio: {e['promedio']}")
    print()


def mejor_promedio(estudiantes):
    if not estudiantes:
        print("No hay estudiantes registrados\n")
        return

    mejor = estudiantes[0]
    for e in estudiantes:
        if e["promedio"] > mejor["promedio"]:
            mejor = e

    print("Estudiante con mejor promedio:")
    print(f"Nombre: {mejor['nombre']}, Promedio: {mejor['promedio']}\n")


def buscar_por_nombre(estudiantes):
    nombre = input("Nombre a buscar: ").strip()
    for e in estudiantes:
        if e["nombre"].lower() == nombre.lower():
            print(f"Nombre: {e['nombre']}, Edad: {e['edad']}, Promedio: {e['promedio']}\n")
            return
    print("Estudiante no encontrado\n")


def eliminar_por_nombre(estudiantes):
    nombre = input("Nombre a eliminar: ").strip()
    for i, e in enumerate(estudiantes):
        if e["nombre"].lower() == nombre.lower():
            estudiantes.pop(i)
            print("Estudiante eliminado\n")
            return
    print("Estudiante no encontrado\n")


def menu():
    print("REGISTRO DE ESTUDIANTES")
    print("1. Agregar estudiante")
    print("2. Mostrar estudiantes")
    print("3. Mostrar estudiante con mejor promedio")
    print("4. Buscar por nombre")
    print("5. Eliminar por nombre")
    print("6. Salir")


# Programa principal
estudiantes = []

while True:
    menu()
    opcion = input("Elige una opción: ")

    if opcion == "1":
        agregar_estudiante(estudiantes)
    elif opcion == "2":
        mostrar_estudiantes(estudiantes)
    elif opcion == "3":
        mejor_promedio(estudiantes)
    elif opcion == "4":
        buscar_por_nombre(estudiantes)
    elif opcion == "5":
        eliminar_por_nombre(estudiantes)
    elif opcion == "6":
        print("Programa finalizado.")
        break
    else:
        print("Opción inválida.\n")
