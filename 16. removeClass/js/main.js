/*============================================
                  removeClass
Elimina una clase dentro de un elemento
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
  $("button").click(function(){
    $("p").removeClass("nuevaClase"); //Removemos la clase del parrafo
  });
});

//---------------------------------------

$(document).ready(function() {  //Declaramos el jQuery
  $("#add").click(function(){
    $("#caja").addClass("miClase"); //Añadimos clase al div
  });
  $("#remove").click(function(){
    $("#caja").removeClass("miClase"); //Removemos la clase al div
  });
});