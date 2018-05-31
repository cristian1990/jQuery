/*===========================================
    Seleccionar elementos HTML sin jQuery
===========================================*/
//Buscar elementos en base a una etiqueta
var elementos = document.querySelectorAll('li');
console.log(elementos);

//Al hacer clic sobre el primer "li" imprime "click" por consola
elementos[0].addEventListener('click', function(){
    console.log('click');
});

//Buscar elemento por una clase especifica
var titulo = document.getElementsByClassName('titulo');
console.log(titulo);

//Buscar elemento por nombre de etiqueta
var ul = document.getElementsByTagName('ul');
console.log(ul);

//Buscar elementos por id
var principal = document.getElementById('principal');
console.log(principal);