import requests

def ejecutar_peticion_httpbin():
    url = "https://httpbin.org/get"
    try:
        respuesta = requests.get(url)
        if respuesta.status_code == 200:
            data = respuesta.json()
            print("Datos de la Petición")
            print(f"IP de origen: {data.get('origin')}")
            print(f"Headers: {data.get('headers')}")
            print(f"Argumentos (args): {data.get('args')}")
        else:
            print(f"Error: {respuesta.status_code}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    ejecutar_peticion_httpbin()