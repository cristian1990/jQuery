/*============================================
                 Contains
selector contiene () selecciona los elementos que contienen la cadena especificada.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    //Buscamos en los div la palabra jQuery y le damos un color de fondo si existe
    $("div:contains('jQuery')").css("background-color", "green"); 
});

