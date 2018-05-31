/*============================================
Manipular las clases de un elemento sin jQuery
============================================*/
var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var boton = document.querySelector('button');

boton.addEventListener('click', function () {
    //classList = Esta propiedad es útil para añadir, eliminar y cambiar las clases CSS de un elemento.
    //Comprobamos si el elemento h1 tiene rojo
    if (!h1.classList.contains('rojo')) { //verifico si tengo la clase rojo
        h1.classList.add('rojo');//La añado
        h1.classList.remove('azul');//Elimnino la azul en el caso de que este
    } else {
        h1.classList.add('azul');
        h1.classList.remove('rojo');
    }
});

//Creamos una funcion estilo JQuery
function toggleClass(elemento, clase) {
    if (elemento.classList.contains(clase)) {
        elemento.classList.remove(clase);
    }else{
        elemento.classList.add(clase);
    }
}

//Al hacer click en el h1 cambia la clase
h2.addEventListener('click', function(){
    toggleClass(h2, 'rojo');
});
