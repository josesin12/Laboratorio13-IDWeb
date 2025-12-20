import math

def normalizar(lista, modo):
    if not lista:
        raise ValueError("La lista no puede estar vacía")

    resultado = []
    n = len(lista)

    if modo == "minmax":
        minimo = min(lista)
        maximo = max(lista)
        rango = maximo - minimo

        if rango == 0:
            return [0.0 for _ in lista]

        for x in lista:
            resultado.append((x - minimo) / rango)

    elif modo == "zscore":
        media = sum(lista) / n
        varianza = sum((x - media) ** 2 for x in lista) / n
        desviacion = math.sqrt(varianza)

        if desviacion == 0:
            return [0.0 for _ in lista]

        for x in lista:
            resultado.append((x - media) / desviacion)

    elif modo == "unit":
        norma = math.sqrt(sum(x ** 2 for x in lista))

        if norma == 0:
            return [0.0 for _ in lista]

        for x in lista:
            resultado.append(x / norma)

    else:
        raise ValueError("Modo inválido. Usa: 'minmax', 'zscore' o 'unit'")

    return resultadoDRXz
valores = [10, 20, 30]

print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))
print("Original:", valores)
import numpy as np

def normalizar(lista, modo):
    datos = np.array(lista, dtype=float)

    if modo == "minmax":
        minimo = datos.min()
        maximo = datos.max()
        rango = maximo - minimo

        if rango == 0:
            return [0.0] * len(lista)

        resultado = (datos - minimo) / rango

    elif modo == "zscore":
        desviacion = datos.std()

        if desviacion == 0:
            return [0.0] * len(lista)

        resultado = (datos - datos.mean()) / desviacion

    elif modo == "unit":
        norma = np.linalg.norm(datos)

        if norma == 0:
            return [0.0] * len(lista)

        resultado = datos / norma

    else:
        raise ValueError("Modo inválido. Usa: 'minmax', 'zscore' o 'unit'")

    return resultado.tolist()
valores = [10, 20, 30]

print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))
print("Original:", valores)
