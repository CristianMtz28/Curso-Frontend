'use strict'

/*Ejercicio 6*/

/*
Ejercicio para practicar con el while y con el if.
Hacer un programa que nos diga si un número es par o impar.
1.- Ventana promt
2.- Validar que los números sean válidos
3.- Que nos muestre si el número es par o impar
*/

var number = parseInt(prompt("Introduce un número", 0));

while (isNaN(number)) {
    number = parseInt(prompt("Introduce un número válido", 0));
}

if (number % 2 == 0) {
    alert("El número " + number + " es un número par");
} else{
    alert("El número " + number + " es un número impar");
}

/*Entendiendo el código:
Primero se pide el número 
Después con el while válidamos que lo que el usuario haya metido es un número sino volverá a pedir el número hasta que el usuario coloque un número válido
Después con el if válida si el número que introdujo el usuario es el resto de su división entre 2 es 0 (number 2% == 0) Entonces quiere decir que el número es par ya que 8/2 es igual a 4 un número sin resto un número entero; sin embargo si ponemos 5/2 el resultado es 2.5 con el punto cinco nos damos cuenta que el resto no es 0 sino .5 lo que lo convierte en un número impar
Ahí es donde entra el else diciendo "Si el resto es 0 es par de lo contrario (else) sería un número impar"
*/