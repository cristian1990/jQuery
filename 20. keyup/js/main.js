/*============================================
                  keyup
El evento keyup se produce cuando se suelta una tecla del teclado.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $("input").keydown(function(){ //Al estar sobre el input y presionar un boton
        $(this).css("background-color", "yellow"); //el input pasa a color amarillo
    });

    $("input").keyup(function(){ //Si soltamos la tecla sobre el input
        $(this).css("background-color", "red"); //se cambia el color a rojo
    });
});

