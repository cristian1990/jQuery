/*============================================
                   mouseup
El evento mouseup ocurre cuando el botón del mouse se deja de presionar sobre el elemento seleccionado
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $("#p1").mouseup(function(){ //Se ejecuta cuando suelto el boton del mouse sobre el "p1"
        $(this).hide();
    });

    $("#p2").mouseup(function(){
        $(this).hide();
    });
});

