'use strict'


/**

Método Stop

El método stop nos permite parar las animaciones que vimos en el capítulo pasado

 */

$(function(){ 


    //Botón de ejecutar
    $('#ejecutar').on('click', function(){ 
        $('.caja').animate({
            marginLeft: '500px'
        }, 5000);

        $('.caja').animate({
            marginLeft: '-=500px'
        }, 5000);
    });

    //Botón de parar
    $('#parar').on('click', function(){ 
        //.stop(Limpiar Animaciones, Saltar al final);   El método stop ecibe 2 parametros; ambos deben ser un valor booleano o sea false o true y estos parámetros nos sirven cuando tenemos más animaciones
        $('.caja').stop(false, true);
    });

});