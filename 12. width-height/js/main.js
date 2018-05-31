/*============================================
                 width-height
width() = Obtenemos el ancho de un objeto
height() = Obtenemos el alto de un objeto
============================================*/
$(document).ready(function(){  //Declaramos el jQuery
  $("button").click(function(){ //Funcionalidad al hacer click
    var texto = "";
    texto += $("#caja").width() + "px" + "<br>"; //Obtenemos el ancho de la caja y lo concatenamos
    texto += $("#caja").height() + "px" + "<br>"; //con el alto de la caja y lo almacenamos
    $("#detalles").html(texto); //Mostramos en pantalla
  });
});

