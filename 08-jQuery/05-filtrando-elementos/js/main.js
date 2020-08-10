'use strict'

/**Métodos para filtrar elementos


*/

$(function(){
    // $('.caja').first().css({ //First para filtrar el primer elemento
    //     background: '#000'
    // });

    // $('.caja').last().css({ //Last para filtrar el primer elemento
    //     background: '#f00',
    //     cursor: 'pointer'
    // });

    // $('.caja').eq(2).css({ //eq nos selecciona la posición como un arreglo entonces nos seleccionaría la caja 3 con posición 2
    //     background: '#000'
    // });

    // $('.caja').filter('#segunda').css({ //filter nos permite filtrar pot id
    //     background: '#0f0',
    //     cursor: 'pointer'
    // });

    $('.caja').not('#segunda').css({ //not nos permite excluir un elemento en este caso el que tenga el id segunda
        background: '#f0f',
        cursor: 'pointer'
    });
});