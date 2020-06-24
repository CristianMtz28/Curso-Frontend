'use strict'

/* Métodos y arreglos para Javascript */

var amigos = ['Cristian', 'Ivan', 'Manuel', 'Ruben', 'Ricardo', 'Erick', 'Edgar'];

/*Length
Lenght nos permite saber cuantos elementos tiene nuestro arreglo; muchas veces vamos a tener arreglos muy grandes que no se pueden contar
*/

document.write(amigos.length);

/*Join
Join nos permite juntar todo nuestro arreglo y mostrarlo en una cadena de texto.
*/

document.write(amigos.join('-'));

/*Pop & Push
Pop nos deja eliminar el último elemento de nuestro arreglo en este caso sería "Edgar"
Con push se añaidría un elemento al final del arreglo
*/

amigos.pop(); //Elimina a Edgar y me deja con un arreglo de 6

amigos.push('Batman'); /*Me devuelve un arreglo de 7 otra vez y el último sería Batman*/

document.write(amigos);

//Shift & Unshift

//Concat

//Sort & Reverse