'use strict'


/**

CALLBACKS

Un callback son funciones que se van a ejecutar después de que se realice una acción (en este caso para practicar será una animación) 

 */

 //FORMA TRADICIONAL.
//Con la función afuera

//Podemos hacer una función por fuera y después llamar la función de modo callback
function saludo(){
    alert('Hola Soy un callback');
}

$(document).ready(function(){


    // $('#ejecutar').on('click', function(){
    //     $('.caja').slideUp(1000, saludo); //en este caso después de la animación realiza el saludo; eso es lo que e sun callback. Esta es la forma tradicional, la forma moderna es con una función anonima 
    // });


//CALLBACK CON FUNCIÓN AFUERA.

    $('#ejecutar').on('click', function(){
        $('.caja').slideUp(1000, function(){
            $(this).slideDown(1000); //Con la palabra this (que nos permitía realizar un evento)  podemos hacer que la caja vuelva a mostrarse, ya que esta ejecutando la función callback una vez que termine la primer animación.
        });
    });
});