class OperadorInvalidoError(Exception):
    pass

def calcular_operacion(operacion_str):
    operadores = ['+', '-', '*', '/']
    
    componentes = []
    operador_usado = None

    for op in operadores:
        if op in operacion_str:
            partes = operacion_str.split(op, 1)
            if len(partes) == 2:
                componentes = partes
                operador_usado = op
                break
    
    if operador_usado is None:
        raise OperadorInvalidoError(f"Operador no válido en la cadena: {operacion_str}")

    try:
        num1 = float(componentes[0].strip())
        num2 = float(componentes[1].strip())
        resultado = None

        if operador_usado == '+':
            resultado = num1 + num2
        elif operador_usado == '-':
            resultado = num1 - num2
        elif operador_usado == '*':
            resultado = num1 * num2
        elif operador_usado == '/':
            if num2 == 0:
                raise ZeroDivisionError("No se puede dividir entre cero.")
            resultado = num1 / num2
        
        return f"Resultado de {operacion_str}: {resultado:.2f}"

    except ValueError:
        print(f"Error: Debes ingresar números válidos. Componentes: {componentes}")
    
    except ZeroDivisionError as e:
        print(f"Error de Cálculo: {e}")

    except OperadorInvalidoError as e:
        print(f"Error de Sintaxis: {e}")
    
    except Exception as e:
        print(f"Ocurrió un error inesperado: {e}")

