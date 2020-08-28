'use strict'

/**ELIMINANDO ELEMENTOS AL DOM CON JQUERY

*/

$(function(){

    /*Métodos para eliminar elementos */
    
    //.REMOVE()  
    //Remove nos permite eliminar tanto el elemento padre como sus elementos hijos
    //$('#contenedor').remove(); Despareció todo el contenedor con sus cajas

    //.CHILDREN().REMOVE();
    //Añadiendo .children antes del remove nos permite sólo eliminar las cajas del contenedor; o sea los elementos hijos del elemento padre
    //$('#contenedor').children().remove(); Se van las cajitas y no el contenedor

    //ELIMINANDO SÓLO UN ELEMENTO
    //Para eso es como el método de arriba pero en children debemos pasarle el parametro del elemento que queremos eliminar en este caso accedemos al id segunda para eliminar esa caja
    // $('#contenedor').children('#segunda').remove();

    //OTRA FORMA DE ELIMINAR LOS ELEMENTOS HIJOS
    //Con empty (vacio en inglés) le decimos que queremos que nuestro contenedor padre (en este caso contenedor) este vacio haciendo que los elementos dentro de el (o sea los elementos hijos) se eliminen dejando el contenedos padre vacío
    $('#contenedor').empty();






});