from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class Sumadora(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/sumar":
    
            cuanto_mide = int(self.headers["Content-Length"])
            lo_que_llego = self.rfile.read(cuanto_mide)
            
            

            cuerpo = json.loads(lo_que_llego)
            num1 = cuerpo.get("a", 0)
            num2 = cuerpo.get("b", 0)
            
            total = num1 + num2
            respuesta_final = {"resultado_suma": total}
            
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(respuesta_final).encode())
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == "main":
    server_calculos = HTTPServer(("localhost", 8001), Sumadora)
    print("Manda tu POST a http://localhost:8001/sumar")
    server_calculos.serve_forever()