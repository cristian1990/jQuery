/*============================================
            Contains Selector II
selecciona los elementos que contienen la cadena especificada.
============================================*/

$(document).ready(function () {  //Declaramos el jQuery
    $("#buscador").keyup(function () {
        var nombre = $("#buscador").val();

        //Validamos que se haya ingresado algo
        if ($.trim(nombre) != "") {  //eliminamos todo espacio en blanco con "trim"
            //Verificamos en la lista si contiene un elemento, si esta añadimos una clase
            $("#nombres li:contains('" + nombre + "')").addClass("miClase");
        }
        else {  //Si la caja esta vacia removemos la clase
            $("#nombres li").removeClass("miClase");
        }
    });
});

