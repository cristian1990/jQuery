/*===========================================
       Manipular el DOM sin jQuery
===========================================*/
//document = hace referencia a nodos de todo el sitio web
//addEventListener = escucha un tipo de evento (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM cargado');
});

//Iniciar EventListener sobre etiqueta "a"
var enlace = document.querySelector("a"); //Capturamos el elemento
console.log(enlace); //muestra el enlace en consola

//Cuando haga click en el enlace lanza una funcion
enlace.addEventListener('click', function(event){
    event.preventDefault(); //Previene el comportamiento por defecto, en este caso no abre la pagina asignada
    console.log('click');
});

