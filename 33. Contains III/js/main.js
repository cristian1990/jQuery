/*============================================
            Contains Selector III
selecciona los elementos que contienen la cadena especificada.
============================================*/

$(document).ready(function () {  //Declaramos el jQuery
    $("#buscador").keyup(function () { //El evento keyup se produce cuando se suelta una tecla del teclado.
        var nombre = $("#buscador").val();

        //Validamos que se haya ingresado algo
        if ($.trim(nombre) != "") {  //eliminamos todo espacio en blanco con "trim"
            //Verificamos en la lista si contiene un elemento, si esta añadimos una clase
            //$("#nombres li:contains('" + nombre + "')").addClass("miClase");

            //Oculto las personas que no tengan el nombre ingresado
            $("#nombres li:not(:contains('" + nombre + "'))").hide();
        }
        else {  //Si la caja esta vacia removemos la clase y mostramos las personas
            //$("#nombres li").removeClass("miClase");
            $("#nombres li").show();

        }
    });
});

