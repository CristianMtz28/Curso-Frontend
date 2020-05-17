'use strict'

/*
EJERCICIO 1

Ejercicio que compara 2 números y te dice cuál es el número más chico
y cuál es el más grande; así cómo si son iguales.

Plus: Si no se introduce un número, volver a pedir los datos
*/

var number1 = parseInt(prompt("Introduce un número", 0));
var number2 = parseInt(prompt("Introduce el segundo número", 0));

while (number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN(number2)) {
    number1 = parseInt(prompt("Introduce un número", 0));
    number2 = parseInt(prompt("Introduce el segundo número", 0));
}

if (number1 > number2) {
    alert('El primer número que introduciste fue ' + number1 + ' y es más grande que el número 2 que fue ' + number2);
}else if (number2 > number1) {
    alert('El segundo número que introduciste fue ' + number2 + ' y es más grande que el número 1 que fue 1' + number1);
}else if (number1 == number2) {
    alert('Ambos números son iguales; los dos números son: ' + number1)
} else {
    alert('Por favor introduce un número válido');
}