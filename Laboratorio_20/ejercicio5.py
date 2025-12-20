
def pedir_n():
    while True:
        try:
            n = int(input("Ingresa un número N "))
            if n >= 3:
                return n
            else:
                print("Error: N debe ser mayor o igual a 3")
        except ValueError:
            print("Error: Debes ingresar un número entero")

def matriz_espiral(n):
    matriz = [[0] * n for _ in range(n)]

    arriba = 0
    abajo = n - 1
    izquierda = 0
    derecha = n - 1

    num = 1

    while num <= n * n:
        for j in range(izquierda, derecha + 1):
            matriz[arriba][j] = num
            num += 1
        arriba += 1

        for i in range(arriba, abajo + 1):
            matriz[i][derecha] = num
            num += 1
        derecha -= 1


        for j in range(derecha, izquierda - 1, -1):
            matriz[abajo][j] = num
            num += 1
        abajo -= 1
        for i in range(abajo, arriba - 1, -1):
            matriz[i][izquierda] = num
            num += 1
        izquierda += 1

    return matriz

def imprimir_matriz(matriz):
    for fila in matriz:
        print(" ".join(f"{num:2}" for num in fila))
N = pedir_n()
resultado = matriz_espiral(N)
imprimir_matriz(resultado)





