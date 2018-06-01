/*============================================
                   mouseout
El evento mouseout se produce cuando el puntero del ratón sale del elemento seleccionado.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $("#p1").mouseover(function(){  //El evento mouseover se produce cuando el puntero del ratón está sobre el elemento seleccionado
        $(this).css("background-color", "red"); //cambiamos el estilo
    });

    $("#p1").mouseout(function(){ //cuando sacamos el puntero de mouse del elemento
        $(this).css("width", "200px"); //cambiamos el ancho
    });
});

