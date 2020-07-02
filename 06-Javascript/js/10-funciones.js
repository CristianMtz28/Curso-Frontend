'use strict'

/*Funciones
Las funciones son bloques de código que nos son útiles cuando queremos utilizar el código varias veces; 
*/

var numero1 = 10;
var numero2 = 5;
var resultado = numero1 + numero2;

document.write(resultado);  
document.write('<br>'); 

//Esto es una suma; sin embargo si quiero hacer otra suma tendría que hacer esto:

var numero1 = 8;
var numero2 = 9;
var resultado = numero1 + numero2;

document.write(resultado);
document.write('<br>');

/*Aquí estamos duplicando código; ya que tenemos las mismas variables. En programación cuando tú repites código significa que algo
estás haciendo mal o esta mal optimizado y el chiste de la programación es hacernos la vida más sencilla y para eso nos sirven las funciones
para optimizar.

Estructura de una funcion:

function nombreFuncion(párametros/argumentos){
    #código a ejecutar
}
*/

// function suma(numero1, numero2){
//     let resultado = numero1 + numero2;
//     document.write(resultado);
//     document.write('<br>');
// }

// suma(10,15);
// suma(25,10);
// suma(10,11);
// suma(28,14);

/*
Con esto podemos decir que la función llamda suma recibe el párametro de numero1 y numero2; el cuál, los valores nos lo pasan cuando invocamos
la función en este caso suma(); lo que este en el parentesis son los valores de los parametros y ejecuta lo que esta en la función; así
podemos utilizar la función cuantas veces queramos con diferentes valores.

COMO REGLA LAS FUNCIONES SÓLO DEBEN HACER UNA COSA Y NO DOS; EN EL EJEMPLO ANTERIOR SUMAMOS Y TAMBIÉN IMPRMIMOS Y NO, LA FUNCIÓN SUMA SÓLO
DEBERÍA SUMAR Y PUNTO. COMO REGLA SIEMPRE DEBEMOS PONER RETURN.
*/

function suma(numero1, numero2){
    let resultado = numero1 + numero2;
    return resultado;
}

/*Las funciones sólo deben ejecutar una cosa y las funciones siempre deben retornar algo; en este caso el resultado de la suma, punto. */

document.write(suma(4,7) + '<br>');

/**También podemos guardar una función dentro de una suma */

var resta = function(numero5, numero6){ //Es una función anónima (sin nombre) porque la estamos guardando dentro de una variable
    return numero5 - numero6;
}

document.write(resta(10, 2));
document.write(resta(100, 28));