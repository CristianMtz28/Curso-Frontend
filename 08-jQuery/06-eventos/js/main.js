'use strict'

/**EVENTOS con jQuery

Para poder crear eventos en jQuery necesitamos usar los callbacks; un callback es una función que se va a ejecutar después de un evento o función; si no se ejecuta la primer función no se ejecutaría la segunda función o sea el callback

*/

$(function(){
    
    var boton = $('#boton');  //Se recomienda poner nuestro botón obtenido de jQuery en una variable ya que podemos utilizarla más adelante
    
    
    // $('#boton').click(function(){
    //     alert('Hola Mundo');            //Aquí se esta creando un callback después de la acción click de jQuery; el callback (o sea el Hola Mundo) se va a ejecutar después de que se haga la primer función en este caso el click
    // });

    function saludo(){
        alert('Hola Mundo');  //Función normal
        console.log('Hola Consola');
    }


    // boton.click(saludo);  //Ejecutando el evento click con la función saludo

    //NUEVO ESTÁNDAR
    boton.on('click', saludo); //Mi elemento .cuando('tenga un click', realiza la función)

    //Evento Callback

    boton.on('mouseenter', function(){
        document.body.style.background = '#000';
    });

    boton.on('mouseleave', function(){
        document.body.style.background = '#f2f2f2';
    });


    //Eliminando Eventos

    var desactivar = $('#desactivar');

    desactivar.on('click', function(){
        boton.off('click'); //Con off acabamos con el evento del otro botón y dentro de los '' debe ir el evento que debemos desactivar
        console.log('Botón desactivado');
    });


});