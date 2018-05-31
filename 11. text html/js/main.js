/*============================================
                text html 
.text = asume que todo es un texto hasta las etiquetas.
.html = no muestra las etiquetas, las respeta.
============================================*/
$(document).ready(function(){  //Declaramos el jQuery
   $("#boton1").click(function(){ //Funcion cuando se haga click
     $("#texto1").text("<b>Hola mundo<b/>"); //Cambiamos el texto del parrafo 
   });
   $("#boton2").click(function(){
    $("#texto3").html("<b>Materias</b>");
  });
});

