'use strict'

/**jQuery trabajando con CSS

*/

$(function(){

    $('#boton').on('click', function(){

        //addClass();
        //Nos permite añadir una clase a nuestro elemento y dentro del parentesis va la clase a añadir:
        //$(this).addClass('naranja'); //usamos this porque queremos acceder al botón que fue clickeado



        //removeClass()
        //Nos permite quitar una clase del elemento; también dentro del paretesis va la clase que vamos a quitar
       // $(this).removeClass('boton'); 

        //toggleClass()
        //Este método nos permite alternar la clase; o sea que si la tiene se la va a quitar si no se la va a poner
        $(this).toggleClass('naranja');

        //También podemos añadir propiedades css con un objeto; sin embargo NO PODEMOS ALTERNAR CSS, SÓLO CLASES. Y lo correcto es trabajar con css y en su archivo css y crear las clases y lo mejor es usar los métodos de jQuery con css
        // $(this).css({
        //     'height': '100px',
        //     'width': '100px'
        // });
    });


});