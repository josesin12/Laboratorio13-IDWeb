import json
equipos_futbol = [
    {
        "Nombre": "Paris Saint-Germain", 
        "Pais": "Francia", 
        "nivelAtaque": 88, 
        "nivelDefensa": 84
    },
    {
        "Nombre": "Liverpool FC", 
        "Pais": "Inglaterra", 
        "nivelAtaque": 86, 
        "nivelDefensa": 87
    },
    {
        "Nombre": "Club América", 
        "Pais": "México", 
        "nivelAtaque": 72, 
        "nivelDefensa": 70
    }
]

json_formato_legible = json.dumps(equipos_futbol, indent=4)
print(json_formato_legible)