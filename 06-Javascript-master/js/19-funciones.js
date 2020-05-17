'use strict'

/**Crear Funciones */

/**Las funciones son un grupo de ordenes agrupado con un nombre concreto. Es decir, en una función vamos a tener un conjunto de reglas, instrucciones, de cosas que se van a ejecutar y podemos tomar esa función y reutilizarla tantas veces como queramos. Por ejemplo:
 * 
 * Cuando estamos conduciendo un auto tenemos la función ACELERAR que combina varios elementos del motor y varios elementos del auto que hacen que el auto avance.
 * Otra función que tenemos en un auto es FRENAR, al igual que en acelerar, el auto utiliza varios componentes del auto para lograr que el carro avance y nosotros podemos ir ACELERANDO o FRENANDO las veces que sea necesario.
 * Estas funciones se ejecutan cuando son invocadas.
 * Una función es un conjunto de ordenes reutilizables que se van a ejecutar cuando nosotros las invoquemos.
*/

/**Para crear una función en javascript usamos la palabra reservada function() con esta palabra reservada, seguida del nombre de la función; por ejemplo calculadora, podemos crear una función  y que esa función retorne algo, por ejemplo un texto, un número, una cosnulta, una acción, etc. Para que una función nos devuelva un resultado, usamos la palabra 'return'.
 * 
 * NOTA PERSONAL: CREO QUE UNA FUNCIÓN ES COMO UNA VARIABLE, NOSOTROS PODEMOS LLAMAR A ESA FUNCIÓN AL IGUAL QUE LLAMABAMOS AL NOMBRE DE LA VARIABLE, POR EJEMPLOL VAR NAME = CRISTIAN: SI YO QUERÍA USAR A CRISTIAN USABA EL NOMBRE DE LA VARIABLE O SEA NAME Y LO PODÍA REUTILIZAR EN EL CODIGO; AHORA LAS FUNCIONES EN VEZ DE GUARDAR DATOS EN ESPECÍFICOS COMO STRINGS, NUMBERS, BOOLEANS, ARRAYS, ETC GUARDARAN UN CONJUNTO DE INSTRUCCIONES; EJEMPLO:
 */


 //Definición de la variable
function functionMessage() {
    //Conjunto de instrucciones dentro de la función
    alert("Hola, soy un mensaje mandado desde una función");
    return 0;
}


//Invocación o llamado de la función
functionMessage();


/**Primero definimos la variable con el nombre que nosotros querramos ponerla ala función; después dentro de la función indicaremos las (valga la redundancia) funciones que realizará; el conjunto de instrucciones y por último podemos llamar esa función cuantas veces querramos; así yo podría poner 100 veces functionMessage() y se ejecutaría lo que esta dentro de la función el número de veces que yo invoque a la función.

Incluso nosotros podemos guardar una función en una variable por ejemplo hagamos una funcion que se imprime por consola e invoquemos la variable dónde será guardada.
 */


function consoleMes(){
    return "Hola, soy un mensaje por consola dentro de una función; me acabas de invocar por medio de una variable";
}

var mess = consoleMes();

console.log(mess);

/**De esta manera hemos definifo una función con un conjunto de instrucciones dentro de ella y esa función fue guardada en una variable así, nosotros podemos invocar la función en forma de variable y hacer con ella lo que nos plazca. */