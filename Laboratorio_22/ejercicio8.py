from wsgiref.simple_server import make_server
import json

mis_libros = [
    { "id": 1, "titulo": "1984", "autor": "George Orwell", "anio": 1949 }
]
proximo_id = 2

def gestion_libros(environ, responder):
    global proximo_id
    metodo = environ.get('REQUEST_METHOD')
    ruta = environ.get('PATH_INFO', '')
    
    if metodo == 'GET' and ruta == '/libros':
        responder("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(mis_libros).encode()]

    elif metodo == 'POST' and ruta == '/libros':
        
        try:
            tamano = int(environ.get('CONTENT_LENGTH', 0))
            cuerpo = environ['wsgi.input'].read(tamano).decode()
            datos = json.loads(cuerpo)
            
            nuevo_libro = {
                "id": proximo_id,
                "titulo": datos.get("titulo"),
                "autor": datos.get("autor"),
                "anio": datos.get("anio")
            }
            mis_libros.append(nuevo_libro)
            proximo_id += 1
            
            responder("201 Created", [("Content-Type", "application/json")])
            return [json.dumps(nuevo_libro).encode()]
        except:
            responder("400 Bad Request", [("Content-Type", "text/plain")])
            return [b"Error en los datos"]

    

    elif metodo == 'GET' and ruta.startswith('/libros/'):
        try:

            id_buscado = int(ruta.split('/')[-1])
            libro = next((l for l in mis_libros if l["id"] == id_buscado), None)
            
            if libro:
                responder("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(libro).encode()]
            else:
                responder("404 Not Found", [("Content-Type", "text/plain")])
                return [b"Libro no existe"]
        except:
            responder("400 Bad Request", [("Content-Type", "text/plain")])
            return [b"ID invalido"]

    

    responder("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no encontrada"]

if __name__ == "__main__":
    servidor_api = make_server("localhost", 8000, gestion_libros)
    print("API de Libros en http://localhost:8000/libros")
    servidor_api.serve_forever()