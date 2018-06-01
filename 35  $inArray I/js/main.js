/*============================================
            $inArray I
Se encarga de verificar si un elemento se encuentra dentro de un arreglo
devuelve -1 si no esta y si se encuentra, retorna su indice
============================================*/

$(document).ready(function () {  //Declaramos el jQuery
    var paises = ["Brasil", "Chile", "Peru", "Uruguay", "España"];

    //inArray(elementoaBuscar, Arreglo);
    console.log($.inArray("Peru", paises)); //Retorna el indice 2 de Peru

    if($.inArray("Uruguay", paises) !== -1){
        console.log("Fue encontrado")
    }
    else{
        console.log("No fue encontrado");
    }
});

