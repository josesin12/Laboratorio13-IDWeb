import time
import threading
import multiprocessing
import asyncio
import random
def consultar_db(nombre):
    tiempo = random.randint(1, 5)
    print(f"Iniciando consulta {nombre}, tardará {tiempo}s...")
    time.sleep(tiempo)
    print(f"Finalizó {nombre}.")

async def consultar_db_async(nombre):
    tiempo = random.randint(1, 5)
    print(f"Iniciando consulta {nombre} (Async), tardará {tiempo}s...")
    await asyncio.sleep(tiempo)
    print(f"Finalizó {nombre} (Async).")
tareas = [("Consulta 1",), ("Consulta 2",), ("Consulta 3",)]
def ejecutar_hilos():
    inicio = time.time()
    hilos = []
    for nombre, in tareas:
        h = threading.Thread(target=consultar_db, args=(nombre,))
        hilos.append(h)
        h.start()
    
    for h in hilos:
        h.join()

    tiempo_total = time.time() - inicio
    print(f"Tiempo total (Hilos): {tiempo_total:.2f} segundos.")
def ejecutar_procesos():
    inicio = time.time()
    procesos = []
    for nombre, in tareas:
        p = multiprocessing.Process(target=consultar_db, args=(nombre,))
        procesos.append(p)
        p.start()

    for p in procesos:
        p.join()

    tiempo_total = time.time() - inicio
    print(f"Tiempo total (Procesos): {tiempo_total:.2f} segundos.")

async def main_async():
    inicio = time.time()
    await asyncio.gather(
        consultar_db_async("Consulta 1"),
        consultar_db_async("Consulta 2"),
        consultar_db_async("Consulta 3")
    )
    tiempo_total = time.time() - inicio
    print(f"Tiempo total: {tiempo_total:.2f} segundos")

if __name__ == '__main__':
    ejecutar_hilos()
    ejecutar_procesos()
    asyncio.run(main_async())