from wsgiref.simple_server import make_server

def mi_app_web(environ, responder):
    ruta = environ.get('PATH_INFO', '/')
    
    if ruta == '/':
        status = "200 OK"
        pagina = b"Inicio"
    elif ruta == '/saludo':
        status = "200 OK"
        pagina = b"Hola mundo desde WSGI"
    else:
        status = "404 Not Found"
        pagina = b"No encontrado - 404"

    headers = [("Content-Type", "text/plain")]
    responder(status, headers)
    
    return [pagina]

if __name__ == "__main__":
    
    
    server = make_server("localhost", 8000, mi_app_web)
    print("WSGI corriendo en http://localhost:8000")
    server.serve_forever()