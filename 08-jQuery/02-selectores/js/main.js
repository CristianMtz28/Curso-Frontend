'use strict'

/**Selectores con jquery */

$(function(){
    // $('h1, h2').hide(); //Estamos accediendo a los elemento h1 y h2 parecido a CSS

    $('.encabezado').hide(); //También accedemos a las clases mediante el . al igual que en CSS

    $('#boton').hide(); //Y de igual manera a los id como en CSS

    $('p#primero a').hide();
});