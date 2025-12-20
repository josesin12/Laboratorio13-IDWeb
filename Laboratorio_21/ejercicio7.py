import os
with open("origen_texto.txt", "w") as f:
    f.write("Esta es la primera línea.\n")
    f.write("Esta es la segunda línea de prueba")

with open("origen_binario.jpg", "wb") as f:
    f.write(b'\x42\x4d\x01\x00\x00\x00') 

def copiar_archivo_texto(origen, destino):
    try:
        with open(origen, "r") as f_origen:
            contenido = f_origen.read()
        
        with open(destino, "w") as f_destino:
            f_destino.write(contenido)
        print(f"Texto: Archivo '{origen}' copiado a '{destino}' exitosament.")
    except FileNotFoundError:
        print(f"Error: El archivo de origen '{origen}' no existe")
    except Exception as e:
        print(f"Error al copiar archivo de texto: {e}")

def copiar_archivo_binario(origen, destino):
    try:
        with open(origen, "rb") as f_origen:
            data = f_origen.read()
        
        with open(destino, "wb") as f_destino:
            f_destino.write(data)
        print(f"Binario: Archivo '{origen}' copiado a '{destino}' exitosamente")
    except FileNotFoundError:
        print(f"Error: El archivo de origen '{origen}' no existe.")
    except Exception as e:
        print(f"Error al copiar archivo binario: {e}")

copiar_archivo_texto("origen_texto.txt", "destino_texto.txt")
copiar_archivo_binario("origen_binario.jpg", "destino_binario.jpg")

with open("destino_texto.txt", "r") as f:
    print(f"Contenido de destino_texto.txt:\n{f.read()}")

os.remove("origen_texto.txt")
os.remove("destino_texto.txt")
os.remove("origen_binario.jpg")
os.remove("destino_binario.jpg")