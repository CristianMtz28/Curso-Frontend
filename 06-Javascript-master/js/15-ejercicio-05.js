'use strict'

/*EJERCICIO 05*/

/*Mostrar todos los números divisores de un número introducido por pantalla*/

/*Para entender este programa primero debemos comprender que es lo que queremos; nosotros vamos a introducir un número; el cuál le buscaremos los números divisores entre ese número (o sea que no sea .5, .1, .7, etc) que el resto sea 0; Por ejemplo:
    123/123= 1
    123/41= 3
    123/3=41
    123/1=123
En todos estos caso el resultado fue un número entero por lo tanto todos los núnmeros son divisores; sin embargo si divides 123/7 = 17.5714256 (EL número 7 no es divisor de 123)

Así que empezaremos con el código; en la variable number vamos a guardar el número que introduzca el usuario y buscaremos que número es divisor del número que el usuario haya ingresado; para eso usaremos un 'for' para que el ciclo for itere los número hasta encontrar el número que el usuario haya introducido. La variable i comienza en 1 porque el for esta buscando el número divisor y no existe división entre 0.
El if dentro del for declara que Si el número introducio por el usuario EL RESTO (%) de este es igual a 0 y no .2, .5, .7, .28 etc Entonces imprimelo por consola*/

var number = parseInt(prompt("Introduce un número", 1));

for( var i = 1; i <= number; i++){
    if (number%i == 0) {
        console.log("Divisor: " + i);
    }
}