/*============================================
                  removeAttr
Se encarga de remover un atributo
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
  $("button").click(function(){
    $("p").removeAttr("id class"); //Removemos el "id" y "class" de los parrafos
  })
});



