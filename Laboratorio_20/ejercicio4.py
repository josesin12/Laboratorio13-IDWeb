def calcular_impuesto_anual(ingreso_mensual):
    aguinaldo = ingreso_mensual * 2
    ingreso_anual = (ingreso_mensual * 12) + aguinaldo
    impuesto_total = 0
    tramo_1_limite = 20000
    if ingreso_anual > tramo_1_limite:
        base_imponible = tramo_1_limite
        impuesto_tramo_1 = base_imponible * 0.0
        impuesto_total += impuesto_tramo_1
        ingreso_restante = ingreso_anual - tramo_1_limite
    else:
        impuesto_tramo_1 = ingreso_anual * 0.0
        impuesto_total += impuesto_tramo_1
        ingreso_restante = 0

    if ingreso_restante > 0:
        tramo_2_limite_superior = 50000
        tramo_2_base_minima = 20000
        tramo_2_rango = tramo_2_limite_superior - tramo_2_base_minima
        
        base_imponible_tramo_2 = min(ingreso_restante, tramo_2_rango)
        impuesto_tramo_2 = base_imponible_tramo_2 * 0.10
        impuesto_total += impuesto_tramo_2
        ingreso_restante -= base_imponible_tramo_2

    if ingreso_restante > 0:
        tramo_3_limite_superior = 100000
        tramo_3_base_minima = 50000
        tramo_3_rango = tramo_3_limite_superior - tramo_3_base_minima

        base_imponible_tramo_3 = min(ingreso_restante, tramo_3_rango)
        impuesto_tramo_3 = base_imponible_tramo_3 * 0.20
        impuesto_total += impuesto_tramo_3
        ingreso_restante -= base_imponible_tramo_3
    if ingreso_restante > 0:
        impuesto_tramo_4 = ingreso_restante * 0.30
        impuesto_total += impuesto_tramo_4

    return impuesto_total

ingreso = float(input("Ingrese el ingreso mensual: "))
impuesto_calculado = calcular_impuesto_anual(ingreso)
print(f"El ingreso mensual es: {ingreso}")
print(f"El ingreso anual (12 sueldos + 2 aguinaldos) es: {(ingreso * 14):.2f}")
print(f"El impuesto anual total a pagar es: {impuesto_calculado:.2f}")