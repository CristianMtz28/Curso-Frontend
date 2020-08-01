'use strict'

/**jQuery

jQuery es una librería de JavaScript que nos va a permitía escribir código de una manera más fácil, hoy en día ya no se usa tanto, hay proyectos que fueron creados con jQuery
y se les da mantenimiento, sin embargo, las nuevas tecnologías como Vue, React o Angular nos permiten dejar a un lado jQuery y usar ES6 que es el nuevo estándar de JavaScript
para escribir mejor el código.

jQuery es un archivo que debemos descargar
 */

$(document).ready(function(){ //Con el $(document).ready le decimos a la función que cuando todo el documento html este cargado ahora sí realicé la acción que en este caso será una funcióm con esto podríamos poner nuestros scripts en el head y no hasta abajo, como normalmente se hacía de poner los scripts al principio y tener nuestro código más ordenado
    alert('Hola');
});

/**SINTAXIS DE JQUERY

$(selector).accion();

Signo de pesos para establecer que es código jQuery. Entre parentesis va el selector del DOM que queremos modificar seguido de una .accion o sea una función o algo que hagamos con el selector seguido de nuestro código.
 */


$(document).ready(function(){
    $('h1').hide(); //Escondimos el elemento
});

$(function(){
    //Esto es igual al $(document).ready(function(){});
});