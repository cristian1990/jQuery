/*============================================
            even odd Selectores          
============================================*/
$(document).ready(function(){  //Declaramos el jQuery
   $("tr:even").css("background-color","yellow") //Selecciono las filas de indice par con "even" y le damos estilos
   $("tr:odd").css("background-color","red") //Selecciono las filas de indice impar con "odd" y le damos estilos
});

