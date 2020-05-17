'use strict'

/*EJERCICIO 03*/

/*Hacer un programa que muestre  todos los número que hay entre dos
números introducidos por el usuario
Entonces el programa nos pedirá un número y después otro número y
nos mostrará todos los número que hay dentro de eses números; ejemplo:
Primer número 7, segundo número 10
Los número entre esos números serían 8 y 9*/


/*Éste código lo hice cuando estaba en Beenet y se me ocurrió con un for
sin embargo cuando estaba en Kodistos lo hice diferente con un while; anexo el codigo descomentado más abajo
lo único que "copie" del código del Curso de Victor Robles fue el document.write.

El hecho de haber hecho el ejercicio por 2 métodos distintos cómo el for y el while en diferentes momentos
de mi vida (Beenet & Kodistos) me hace ver que sí puedo programar :3
*/

//Código con FOR con validación de que el primer número sea menor al segundo para que pueda sacar los número entre uno
//y el otro, si lo pone mal no habría números entre ellos
//Sin embargo 5 minutos después pensé... ¿Por qué límitar al usuario? Muestrale los número al revés y lo hice :3

var number1 = parseInt(prompt('Introduce el primer número', 0));
var number2 = parseInt(prompt('Introduce el segundo número', 0));

if (number1>=number2) {
    //document.write("<h1>El número " + number1 + " es mayor al número " + number2 + " introduce correctamente los valores</h1>");
    document.write("<h1>Del número " + number1 + " al número " + number2 + " hay los siguientes números:</h1>");
    for(var i=number1; i>=number2; i--){
    document.write("Número: " + i  + "<br>");
    }
} else {
    document.write("<h1>Del número " + number1 + " al número " + number2 + " hay los siguientes números:</h1>");
    for(var i=number1; i<=number2; i++){
    document.write("Número: " + i + "<br>");
}
}