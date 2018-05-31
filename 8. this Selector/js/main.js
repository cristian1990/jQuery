/*============================================
                this Selector              
============================================*/
$(document).ready(function(){  //Declaramos el jQuery
    $("#boton").click(function(){ //Cuando hagamos click en el boton
        $("#texto").hide(3000).show(500); //el texto se debe ocultar y aparecer
        //Con "this" nos referimos al elemento o id con el que estamos trabajando
        $(this).hide(3000).show(500); //el boton se debe ocultar y aparecer
    })
});

