'use strict'

/* OPERADORES & TIPOS DE DATOS
OPERADORES
Los operadores dentro de un lenguaje de programación es lo mismo
que un operador matemático, por ejemplo:
*/

var number1 = 7;
var number2 = 10;

var addition = number1 + number2;
var subtraction =  number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;

alert('El resultado de la suma es: ' + addition);
alert('El resultado de la resta es: ' + subtraction);
alert('El resultado de la multiplicación es: ' + multiplication);
alert('El resultado de la division es: ' + division);

/*
Otra operación que también se puede usar es el uso del porcentaje %
el cuál es el resto de la división de 2 números, ejemplo:
*/

var number3 = 2;
var number4 = 5;
var rest = number3 % number4;
alert('El resto de la operación es: ' + rest);

/*
Tipos de datos

Los tipos de datos básicos son:
Sin definir ( undefined )
Nulo ( null )
Lógicos ( boolean )
Numérico ( number )
Cadena ( string )
Símbolo ( symbol )

Es decir:
*/

var number = 28;
var string = "Hola soy un string";
var boolean = true; //También esta el false y también puede ser el 1 o 0 1= true 0= false

/*
Existen funciones que nos permiten cambiar un string a un numero tales como:

Number();
parseInt();
parsefloat();

Ejemplo:
*/

var falseNumber = "28";

console.log(Number(falseNumber) + 2);
console.log(parseInt(falseNumber) - 3);
console.log(parseFloat(falseNumber) + 1.5);

/*
Así en nuestro navegador se imprimió: 30, 25 y 29.5 sucesivamente

Y también podemos convertir un número a un string con la función String();
ejemplo:
*/

var numberToString = 28;

console.log(String(numberToString)+8); 

/*
La variable numberToString se definió como un numero entero entonces al poner + 8 debería darnos en
consola 36 sin embargo como convertimos ese número 28 a un string sólo concatenará el número que ahora
es un String y el resultado será 288 el 28 concatenando el 8
*/

/*
Con typeof podemos ver el tipo de dato que tiene la variable; ejemplo:
*/

console.log(typeof numberToString); //Nos va a decir que la variable es tipo número porque así fue definida

