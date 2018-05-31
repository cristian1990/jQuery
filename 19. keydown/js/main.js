/*============================================
                  keydown
El evento KeyDown ocurre cuando una tecla del teclado se presiona hacia abajo.
============================================*/

//--------------- 1ra. MANERA DE HACERLO -----------------

$(document).ready(function() {  //Declaramos el jQuery
    $("input").keydown(function(){ //Añadimos el evento al input
        $(this).css("background-color", "yellow"); //Cuando toco una tecla cambia de color
    });
});

//--------------- 2da. MANERA DE HACERLO -----------------
/*
$(document).ready(function() {  //Declaramos el jQuery
    $("input[type='text']").keydown(function(){ //Añadimos el evento al input de tipo texto
        $(this).css("background-color", "red"); //Cuando toco una tecla cambia de color
    });

    $("input[type='email']").keydown(function(){ //Añadimos el evento al input de tipo email
        $(this).css("background-color", "red"); //Cuando toco una tecla cambia de color
    });
});
*/
