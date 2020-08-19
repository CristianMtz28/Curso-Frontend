'use strict'


/**

La palabra reservada this nos permite realizar un evento o un efecto a ESTE (this) elemento en específico y no a todos de manera global; por ejemplo cambiar el color de una caja:

 */

$(function(){


    $('.caja').on('click', function(){

        // $('.caja').toggleClass('color'); Si dejamos la clase .caja dentro del parentesis nos cambiará todos los elementos que tengan esa clase en este casi todas las cajas; es por eso que con la palabra reservada this sólo modificamos el elemento que estemos dando el evento en este caso el clcik
        $(this).toggleClass('color'); //Con toggleCLass añade o quita la clase

        //con javascript era así: this.togleClass pero con jQuery es un poquititito más complejo pero es unas por otras xD
    });












});

