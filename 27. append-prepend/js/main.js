/*============================================
                append-prepend
append = especifican contenido al final de los elementos seleccionados.
prepend = especifican contenido al principio de los elementos seleccionados.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $("#boton1").click(function(){
        $("p").append(" <b>Cristian</b>"); //Añadimos Cristian en el tag "p" al final
        $("p").prepend(" <b>Datos: </b>"); //Añadimos Datos en el tag "p" al principio
    });

    $("#boton2").click(function(){
        $("ol").append("<li>Nuevo final</li>") //Añadimos a la lista ordenada un elemento al final
        $("ol").prepend("<li>Nuevo principio</li>") //Añadimos a la lista ordenada un elemento al principio
    });
});

