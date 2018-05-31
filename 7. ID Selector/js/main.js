/*============================================
                ID Selector              
============================================*/
$(document).ready(function(){  //Declaramos el jQuery
    $("button").click(function(){ //Seleccionamos la etiqueta
        $("#texto2").hide(); //Seleccionamos el id del div y lo ocultamos con "hide()"
        //$("*").hide(); //Seleccionamos todos los elementos de la pagina y los ocultamos
    })
});

//--------------------------------------------------------

$(document).ready(function(){  //Declaramos el jQuery
    $("#enviar").click(function(){  //Al hacer click en el boton con id "enviar" debemos
        var ingreso = $("#espacio").val(); //obtener lo ingresado en el input y almacenarlo en una variable
        alert(ingreso);
    });
});
