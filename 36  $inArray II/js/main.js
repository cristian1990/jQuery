/*============================================
               $inArray II
Se encarga de verificar si un elemento se encuentra dentro de un arreglo
devuelve -1 si no esta y si se encuentra, retorna su indice
============================================*/

$(document).ready(function () {  //Declaramos el jQuery
    var aNombres = ["Juan", "Pablo", "Marcos", "Pedro", "Javier", "Cristian", "Miguel"];

    $("input").keyup(function(){ //Hago referencia al input
        var nombre = $(this).val(); //Se almacena el nombre ingresado por el usuario y lo almacenamos
        if($.inArray(nombre, aNombres) !== -1){ //Chequeo si se encontro el elemento
            $("#info").text(nombre + " Fue encontrado");
        }
        else{
            $("#info").text("");
        }
    });
});

