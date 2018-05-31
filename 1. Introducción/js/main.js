/*===========================================
          Introduccion a JQUERY
se puede identificar de dos maneras
"$" o "jQuery"
===========================================*/
//Con javascript nativo
var elemento = document.querySelector('h1');
console.log(elemento.innerHTML);

//Con jquery
var elemento2 = $('h1');
//setTimeout = ejecuta una funcion despues de un tiempo determinado
var tiempo = setTimeout(function(){
    elemento2.text("Hola como estas?");
},3000);