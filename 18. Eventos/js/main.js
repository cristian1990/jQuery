/*============================================
                  Eventos
El evento dblclick se produce cuando un elemento se hace doble clic.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $("#p1").dblclick(function(){  //Cuando se haga doble click
        $(this).hide(); //el "#p1" se oculta, hacemos referencia al id con "this"
    });

    $("#p2").dblclick(function(){
        alert("MENSAJE");
    });

    $("#p3").dblclick(function(){
        $(this).hide();
    });
});



