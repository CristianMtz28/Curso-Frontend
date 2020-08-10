'use strict'

/**EFECTOS
Los efectos en jQuery nos facilita el hecho de colocar efectos (valga la redundacia) a los elemntos de nuestro sitio web; con CSS ya se podían hacer efectos, aunque, con CSS3 ya era de una manera más faácil y hay propiedades que son especificamente para efectos el acceder con ellos mediante jQuery es mucho más fácil y sencillo.

*/


    function efecto(){
        //$(selector).efecto(velocidad, callback);
        //Función para que, al presionar el botón nos desaparezca la caja en 3 segundos y después nos mande un alert
        // $('.caja').hide(3000, function(){
        //     alert('Oculto');
        // });

        // $('.caja').show(); Con show mostramos la caja

        // $('.caja').toggle(3000); Alternando la visibilidad de la caja

        // $('.caja').fadeOut(1000);
        // $('.caja').fadeIn(1000);
        // $('.caja').fadeToggle(1000);  Efecto desvanecido 

        // $('.caja').slideUp(1000);
        // $('.caja').slideDown(1000);
        $('.caja').slideToggle(1000); //Efecto de arriba a abajo


    }

