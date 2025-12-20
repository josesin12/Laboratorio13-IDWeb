from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class ServerFachada(BaseHTTPRequestHandler):
    def do_GET(self):

        if self.path == "/":
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            mi_pantalla = "<html><body><h1>Hola!</h1><p>Esta es mi pagina estatica del lab.</p></body></html>"
            self.wfile.write(mi_pantalla.encode())
            
        elif self.path == "/saludo":
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            diccionario_hola = {"msg": "Hola"}
            self.wfile.write(json.dumps(diccionario_hola).encode())
            
            
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"No existe esa ruta")


if __name__ == "__main__":
    mi_server = HTTPServer(("localhost", 8000), ServerFachada)
    print("Server andando en http://localhost:8000")
    mi_server.serve_forever()