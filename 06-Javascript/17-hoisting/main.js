'use strict'

/**HOITSTING

El hoisting en Javascript es un comportamiento que tenemos que nos permite que Javascript se comporte de cierta forma.

 */


var nombre = 'Cristian'; //Normalmente nosotros declaramos nuestras variables así y es correcto; sin embargo estamos haciendo la Declaración y la Inicialización 
//en una sola línea de código, no esta mal pero normalmente en un código más real se hace mediante el hoisting que separa las declaración y la inicialización.

var apellido;                  //Esta es la declaración 
apellido = 'Martínez';         //Esta es la inicialización

/**De esta manera nosotros establecemos las variables antes y las utilizamos conforme las vayamos necesitando. */


//También podemos poner el "código desordenado" ya que mediante el hoisting Javascript lo lee como si primero declararmos la varibale y después la inicializaramos pero por 
//buena práctica normalmente primero se declara y luego se inicializa aunque puede haber casos donde se haga de esta forma
apellido2 = 'Martínez';

var apellido2;

/*-------------*Ejemplo con función */

var text;

function saludo(){
    text = 'Hola Mundo';
    console.log(text);
}

saludo();

/**NOTA: JAVASCRIPT SÓLO VA A POSICIONAR LAS DECLARACIONES NO LAS INICIALIZACIONES */

