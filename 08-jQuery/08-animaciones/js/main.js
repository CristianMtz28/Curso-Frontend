'use strict'


/**

ANIMACIONES

Las animaciones en jQuery son bastantes sencillas, tenemos la propiedad animate y dentro de animate van los cambios que queremos que sufra nuestro elemento en modo de objeto

 */

$(function(){ //Iniciando jQuery


    /**$(selector).animate(parametros), velocidad, callback */


    $('#boton').on('click', function(){ //Indicando que al hacer click en el botón se ejecute lo que esta dentro de la función con jQuery
        $('.caja').animate({ //usamos la propiedad animate({}); pero dentro de las llaves va el objeto con las propiedades a cambiar
            width: '+=300px', //objeto 1; si ponemo += al principio podemos hacer que la animación siga
            //opacity: '0.2', //objeto 2 ... etc
            margin: '20px'
            //backgorund-color: '#f2f2f2'  LOS COLORES EN LAS ANIMACIONES NO FUNCIONAN así que debemos apoyarnos de las animaciones de css con los @keyframes y cambiando la clase de la caja cuando presionemos el botón
        }, 300, function(){  //velocidad de la animación seguido del callback
            //alert('Fin de la animación');  //función con el callback
        }); 

        //Cambiando el color de la caja
        $('.caja').toggleClass('animacion');
    });












});