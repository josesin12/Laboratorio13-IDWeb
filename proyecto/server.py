
from wsgiref.simple_server import make_server
import json, os, mimetypes
from urllib.parse import unquote

equipos_db = [
    {"id": 1, "nombre": "Real Madrid", "ciudad": "Madrid", "nivelAtaque": 10, "nivelDefensa": 9},
    {"id": 2, "nombre": "Barcelona", "ciudad": "Barcelona", "nivelAtaque": 9, "nivelDefensa": 8},
    {"id": 3, "nombre": "Melgar", "ciudad": "Arequipa", "nivelAtaque": 5, "nivelDefensa": 4}
]
id_actual = 4

def servir_estatico(ruta):
    base = "static"
    archivo = ruta.lstrip("/")
    camino_final = os.path.join(base, archivo.replace("static/", ""))
    
    if not os.path.isfile(camino_final):
        return None, None
    
    tipo, _ = mimetypes.guess_type(camino_final)
    with open(camino_final, "rb") as f:
        return f.read(), tipo or "application/octet-stream"

def app(environ, responder):
    global id_actual
    metodo = environ.get('REQUEST_METHOD')
    ruta = unquote(environ.get('PATH_INFO', ''))


    if ruta == "/" or ruta.startswith("/static/"):
        if ruta == "/": ruta = "/static/index.html"
        cont, tipo = servir_estatico(ruta)
        if cont:
            responder("200 OK", [("Content-Type", tipo)])
            return [cont]

    if metodo == 'GET' and ruta == '/equipos':
        responder("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos_db).encode()]

    elif metodo == 'POST' and ruta == '/equipos':
        largo = int(environ.get('CONTENT_LENGTH', 0))
        body = environ['wsgi.input'].read(largo).decode()
        nuevo_dato = json.loads(body)
        
        nuevo_dato["id"] = id_actual
        equipos_db.append(nuevo_dato)
        id_actual += 1
        
        responder("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(nuevo_dato).encode()]

    responder("404 Not Found", [("Content-Type", "text/plain")])
    return [b"No encontrado"]

if __name__ == "__main__":
    print("Servidor en http://localhost:8000")
    make_server("localhost", 8000, app).serve_forever()