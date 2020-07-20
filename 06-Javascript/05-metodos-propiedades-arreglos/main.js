'use strict'

/* Métodos y arreglos para Javascript */

var amigos = ['Cristian', 'Ivan', 'Manuel', 'Ruben', 'Ricardo', 'Erick', 'Edgar'];

/*Length
Lenght nos permite saber cuantos elementos tiene nuestro arreglo; muchas veces vamos a tener arreglos muy grandes que no se pueden
contar. En este caso 7
*/
document.write('<b>Lenght</b>');
document.write('<br>');
document.write(amigos.length);
document.write('<br>');
document.write('<br>');

/*Join
Join nos permite juntar todo nuestro arreglo y mostrarlo en una cadena de texto. 
*/
var join = amigos.join('-');
document.write('<b>Join</b>');
document.write('<br>');
document.write(join);
document.write('<br>');
document.write('<br>');

/*Pop & Push
Pop nos deja eliminar el último elemento de nuestro arreglo en este caso sería "Edgar"
Con push se añaidría un elemento al final del arreglo
*/
document.write('<b>Pop & Push</b>');
document.write('<br>');
amigos.pop(); //Elimina a Edgar y me deja con un arreglo de 6

amigos.push('Batman'); /*Nos permite agregar un elemento al arreglo al final; en este caso 
me devuelve un arreglo de 7 otra vez y el último sería Batman ya que primero elimine a Edgar y después añadí a Batman*/

document.write(amigos);
document.write('<br>');
document.write('<br>');

//Shift & Unshift
/*Shift nos permite eliminar el primer elemento que tengamos
Unsift poner un elemento antes*/

document.write('<b>Shift</b>');
document.write('<br>');
document.write(amigos.shift());
document.write('<br>');
document.write(amigos);
document.write('<br>');
document.write('<br>');

/*Unshift nos deja agregar un elemento al inicio del array */
document.write('<b>Unshift</b>');
document.write('<br>');
amigos.unshift('Bruce Wayne');
document.write(amigos);
document.write('<br>');



//Concat
/*Nos permite concatenar 2 arreglos colocando el segundo arreglo dentro de la función contact del primero que queremos concatenar */
var amigos2 = ['Felipe', 'Oscar'];

var amigosTotal = amigos.concat(amigos2);

document.write(amigosTotal);
document.write('<br>');
document.write('<br>');

//Sort & Reverse

/*Sort nos permíte ordenar alfabéticamente nuestro arreglo
SORT no nos permíte ordenar un arreglo de números, sólo strings; sí se podría pero con una función más específica */
document.write('<b>Sort</b>');
document.write('<br>');
document.write(amigos.sort());
document.write('<br>');
document.write('<br>');

/*Reverse */
document.write('<b>Reverse</b>');
document.write('<br>');
document.write(amigos.reverse());
document.write('<br>');