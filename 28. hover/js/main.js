/*============================================
                   hover
Especifica dos funciones a ejecutar cuando el puntero del ratón pasa sobre los elementos seleccionados.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    $(".caja").hover(function(){{ //agregon funcionalidad cuando me posiciono arriba de los div
        if($(this).text() === "3"){ //Si la caja tiene el texto 3
            $("#info").html("Ganaste!");
        }
        $(this).css("background-color", "yellow"); //cambio su color de fondo
    }});

    var parent = $("#container");
    var divs = parent.children(); //Agregamos una referencia a todos los div

    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
});

