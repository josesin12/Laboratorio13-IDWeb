import requests

def listar_pokemon():
    url = "https://pokeapi.co/api/v2/pokemon"
    parametros = {"limit": 10, "offset": 0}
    try:
        r = requests.get(url, params=parametros)
        if r.status_code == 200:
            datos = r.json()
            lista_pokemon = datos.get("results", [])
            print("Listado de los primeros 10 Pokémon")
            for i, pokemon in enumerate(lista_pokemon, 1):
                nombre = pokemon.get("name")
                print(f"{i}. {nombre.capitalize()}")
        else:
            print(f"Error: {r.status_code}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    listar_pokemon()