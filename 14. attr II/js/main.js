/*============================================
                    attr
Sirve para obtener el valor de un atributo y tambien 
establecer un nuevo valor a determinado atributo
============================================*/
$(document).ready(function () {  //Declaramos el jQuery
  $("button").click(function () {  //Le damos un funcionamiento al boton
    $("p").attr("id", function(index){  //seleccionamos el parrafo le pasamos el id y una funcion como valor
      return "p" + (index + 1); //retorna p1 p2 p3 p4, isertamos en cada parrafo
    })
  });
});



