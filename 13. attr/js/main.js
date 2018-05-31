/*============================================
                    attr
Sirve para obtener el valor de un atributo y tambien 
establecer un nuevo valor a determinado atributo
============================================*/
$(document).ready(function(){  //Declaramos el jQuery
  $("button").click(function(){
    //var mje = "El valor del atributo es: " + $("input").attr("type"); //Obtenemos el valor del atributo type
    var mje = "El valor del atributo es: " + $("input").attr("id"); //Obtenemos el valor del atributo id 
    //var mje = "El valor del atributo es: " + $("input").attr("value"); //Obtenemos el valor del atributo value
    $("#info").html(mje);
  });
});

//--------- ESTABLECEMOS UN VALOR NUEVO A UN ATRIBUTO ---------
$(document).ready(function(){  //Declaramos el jQuery
  $("button").click(function(){
    //Cambiamos el valor del input de "id" a "codigo"
    //$("input").attr("id", "codigo") //cambiamos el valor de todos los "id"
    $("input[type=text]").attr("id", "codigo") //especificamos que cambiamos el valor de primer "id"
  });
});

