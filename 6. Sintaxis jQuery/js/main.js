/*============================================
                Introducción
 Existen 3 maneras de declarar jquery               
============================================*/
/*
====== MANERA 1 =====
$(document).on("ready", function(){
})

====== MANERA 2 =====
$(document).ready(function(){
});

====== MANERA 3 =====
$(function(){
});
*/

$(document).ready(function(){
    //Seleccionamos el div y lo ocultamos por 3 seg. y despues lo mostramos en 1 seg.
    $("#codigo").hide(3000).show(1000);
});