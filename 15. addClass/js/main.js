/*============================================
                   addClass
Agrega la (s) clase (s) especificada (s) a 
cada elemento en el conjunto de elementos coincidentes.
============================================*/

//-------- CAMBIAMOS ESTILOS UTILIZANDO CSS ----------
$(document).ready(function() {  //Declaramos el jQuery
  $("button").click(function() {  //Damos funcionamiento al boton
    //$("p").css("color", "red");  //Le damos un color a todos los parrafos
    //s$("p:first").css("color", "red");  //Le damos un color al primer parrafo
    //$("p:last").css("color", "red");  //Le damos un color al ultimo parrafo
  });
});

//------ CAMBIAMOS ESTILOS UTILIZANDO addClass --------
$(document).ready(function() {  //Declaramos el jQuery
  $("button").click(function() {
    //$("p").addClass("nuevaClase"); //Le agregamos una clase a la etiqueta
    $("p").addClass(function(index){ //index = 0
      //Agregamos una clase distinta a cada parrafo
      return "miClase" + (index + 1);  //miClase1 miClase2 miClase3 miClase4 (itineracion implicita)
    });
  });
});
