
const listaPrincipal = document.getElementById('lista-principal'); 

if (listaPrincipal) {
    console.log('E7: Contenido de los elementos <li>:');
    for (const item of listaPrincipal.children) {
        
        if (item.nodeName === 'LI') {
            console.log(item.textContent);
        }
    }
}