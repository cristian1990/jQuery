/*============================================
                   mouseover
El evento mouseover se produce cuando el puntero del ratón se mueve sobre un elemento, o sobre uno de sus hijos
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $("#p1").mouseover(function(){ //Cuando paso el moouse sobre el "p1"
        $(this).hide(); //ese elemento se oculta
    });

    $("#p2").mouseover(function(){
        $(this).hide();
    });

    $("#p3").mouseover(function(){
        $(this).hide();
    });

    $("#p4").mouseover(function(){
        $(this).hide();
    });
});

