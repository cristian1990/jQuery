/*============================================
Manipular los estilos de un elemento sin jQuery
============================================*/

//Obtener los estilos del elemento
var div = document.querySelector('div');
estilos = getComputedStyle(div, null);

console.log(estilos['background-color']);

//Añadir una clase
div.classList.add('transicion');

//Maneras de Modificar o añadir estilos
div.style.backgroundColor = "green";
div.style['border-radius'] = '20px';

//Cambiar varios estilos a la vez
div.style.cssText += 'backgroun-color: black; width: 400px; height: 200px;';
