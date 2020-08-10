'use strict'

/**Accediendo a los Elementos del DOM con jQuery

Con jQuery es muchísimo más fácil acceder a los elementos del DOM que con JavaScript, con esto podemos acceder a los elementos del DOM y poder manipularlos a nuestra convenciencia para nuestro sistema web.
*/

$(function(){
    //Parent
    // $('#tercera').parent().css({ //Nosotros pudimos acceder al elemento padre con #padre en vez de tercera ya que nuestro código HTML sí tiene definido el id; sin embargo no siempre lo vamos a tener en el HTML por eso podemos acceder al elemento con el id que en este caso es tercera y después sehuido ponemos .parent para decirle que accederemos al elemento padre del id #tercera y con .css() le decimos que queremos cambiar el css del elemento que accedimos que en este caso es el parent de #tecera
    //     background: '#1b3d82' //Aquí ya sólo aplicamos efectos CSS y ponemos el fondo de color azul marino
    // });

    //Parents
    // $('#tercera').parents().css({  //Aquí no sólo escogemos un sólo elemento padre, si no todos los elementos HTML incluido el body
    //     background: '#1b3d82' //Aquí ya sólo aplicamos efectos CSS y ponemos el fondo de color azul marino
    // });

    //Elementos hijo Children
    // $('#padre').children().fadeOut(5000);
    // $('#padre').children('#tercera').fadeOut(5000); //Aplicando el efecto a un sólo elemento

    //Find
    

    //Siblings
    // $('#tercera').siblings().fadeOut(5000); //Nos permite seleccionar todos los elementos hermanos del elemento que digamos

    //Next - Prev Con estos seleccionamos los elementos antes y después del elemento que le digamos
    $('#tercera').prev().css({ 
        background: '#000'
    });

    $('#tercera').next().css({
        background: '#ff0000'
    });

    //También tenemos prevAll y nextAll para seleccionar todos los elementos
});