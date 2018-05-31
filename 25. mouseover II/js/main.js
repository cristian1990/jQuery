/*============================================
                   mouseover II
El evento mouseover se produce cuando el puntero del ratón se mueve sobre un elemento, o sobre uno de sus hijos
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $(".miClase").mouseover(function(){
        var valorDelAtributo = $(this).attr("data-nuevo"); //Obtenemos el valor de todos los atributos "data-nuevo" y lo almacenamos
        //alert(valorDelAtributo); //Cuando paso el mouse sobre el elemento sale un alert()
        $("#" + valorDelAtributo).hide(); //Concatenamos y ocultamos
    });
});

