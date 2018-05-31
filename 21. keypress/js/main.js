/*============================================
                   keypress
El evento de pulsación de tecla es similar al evento KeyDown. El evento se produce cuando se presiona un botón.
Sin embargo, el evento de pulsación de tecla no se dispara para todas las claves (por ejemplo, ALT, CTRL, SHIFT, ESC).
Utilice el método keydown () también de comprobar estas teclas.
============================================*/

$(document).ready(function() {  //Declaramos el jQuery
    var x = 0;

    $("input").keypress(function(){  //Al estar en el input y presionar un boton de teclado
        $("span").text(x += 1); // la variable "x" debe ser incrementada en 1 unidad y mostramos en 
    });                         //pantalla en el span con el metodo "text"
});

