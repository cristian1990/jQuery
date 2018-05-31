/*============================================
                   mousedown
El evento mousedown se produce cuando un usuario presiona un botón del ratón sobre un elemento.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $("#p1").click(function(){ //Se ejecuta cuando dejamos de hacer click en el elemento
        $(this).hide(); //"this" hago referencia el id p1 
    });
    
    $("#p2").mousedown(function(){  //Se ejecuta apenas hacemos click sobre el elemento
        $(this).hide(); 
    });
});

