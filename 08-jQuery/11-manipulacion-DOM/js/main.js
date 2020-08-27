'use strict'

/**MANUPULANDO EL DOM CON JQUERY

*/

$(function(){

    //TEXTO
    //$('#titulo').text('Título'); //Cambiamos el texto 'Encabezado' por 'Título' pero sólo el texto no podemos insertar etiquetas HTML

    //$('#titulo').html('<i>Hola</i>'); //Con esta sí podemos insertar código HTML


    //FORMULARIOS
    //Para ese ejemplo vamos a hacer que lo que este dentro dle input se ponga automáticamente en el encabezado

    var nombre = $('#nombre'); //Guardamos el elemento que tenga el id del input en una variable, en este caso nombre

    nombre.on('change', function(){ //accedemos a la variable y le ponemos el evento 'change' que nos permite cambiar el contenido del elemento con el id #nombre
        $('#titulo').text(nombre.val()); //Pnemos una función anonima que nos permita modificar el texto como habíamos visto arribita pero ponemos .val() que nos pemitirá acceder al valor que tenga la variable nombre que a su vez es el input con el id #nombre
    });

    //ENLACE
    $('#enlace').text('Cristian Martínez'); //Acceder al texto es de la misma manera
    $('#enlace').attr('href', 'https://cristianmtz.com'); //Cambiar el enlace es con .attr que recibe dos valores el primero es el parametro que queremos cambiar en este caso el href y en segundo sería el enlace que quiero modificar

    //Modificando más atributos 
    //Para modificar más atributos no debemos hacerlo con sólo 2 parametros que es el href y el link como vimos, si no debemos ponerlo en un obketo que nos pemitirá modificar más elementos; por ejemplo vamos a pasar de cristianmtz a youtube
    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank',
        'href': 'https://youtube.com',
    });

    //






});