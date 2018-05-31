/*============================================
             List Selector             
============================================*/
$(document).ready(function(){  //Declaramos el jQuery
    $("button").click(function(){ //Damos funcionalidad al hacer click
        //Seleccionamos el tipo de lista y la lista
        //$("ul li:first").hide(); //Seleccionamos el primer elemento de la lista
        //$("ul li:first-child").hide(); //Seleccionamos el primer elemento de la todas las listas
        $("ul li:last-child").hide(); //Seleccionamos los ultimos elementos de la todas las listas
    }); 
});

