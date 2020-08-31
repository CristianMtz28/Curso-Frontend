'use strict'

/**Métodos útiles para trabajar con medidas

*/

$(function(){

    var titulo = $('#titulo');
    var info = $('#info');


//******** MEDIDAS DEL ANCHO************* */
    //Calculamos el ancho del elemento
    info.append('Ancho: ' + titulo.width() + '<br/>');

    //Calculamos el ancho completo o sea el padding que haya dentro del elemento
    //innerWidth() calcula el ancho más el padding
    info.append('Ancho Interno: ' + titulo.innerWidth() + '<br/>');

    //Calculando el ancho más el paddings más el border
    info.append('Ancho Externo: ' + titulo.outerWidth() + '<br/>');

     //Calculando el ancho más el paddings más el border más el margin
    info.append('Ancho Total: ' + titulo.outerWidth(true) + '<br/>'); //Se le agrega true para poder calcular el margin


 //******** MEDIDAS DEL ALTO************* */
    //Calculamos el alto del elemento
    info.append('Alto: ' + titulo.height() + '<br/>');

    //Calculamos el alto completo o sea el padding que haya dentro del elemento
    //innerWidth() calcula el alto más el padding
    info.append('Alto Interno: ' + titulo.innerHeight() + '<br/>');

    //Calculando el alto más el paddings más el border
    info.append('Alto Externo: ' + titulo.outerHeight() + '<br/>');

     //Calculando el alto más el paddings más el border más el margin
    info.append('Alto Total: ' + titulo.outerHeight(true) + '<br/>'); //Se le agrega true para poder calcular el margin


});