/*============================================
                 focusout
El evento focusOut se produce cuando un elemento (o cualquier elemento dentro de él) pierde el foco.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $("#nombre").focusin(function(){
        $(this).addClass("miClase"); //Agregamos clase al enfocar
        $("#id1").html("Ingrese su nombre"); //Mostramos texto al sacar el enfoque en el input
    });
    $("#nombre").focusout(function(){
        $(this).removeClass("miClase");  //Removemos la clase al dejar de enfocar
        $("#id1").html(""); //Dejamos en blanco al sacar el enfoque en el input
    });


    $("#apellido").focusin(function(){
        $(this).addClass("miClase"); //Agregamos clase al enfocar
        $("#id2").html("Ingrese su apellido"); //Mostramos texto al sacar el enfoque en el input
    });
    $("#apellido").focusout(function(){
        $(this).removeClass("miClase");  //Removemos la clase al dejar de enfocar
        $("#id2").html(""); //Dejamos en blanco al sacar el enfoque en el input
    });
});

