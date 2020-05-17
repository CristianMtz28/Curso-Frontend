'use strict'

/*Ejercicio 07*/

/*
Realizaremos la tabla de multiplicar de un número introducido por pantalla
*/

var number = parseInt(prompt("Introduce un número para mostrarte su tabla de multiplicar", 0));

document.write("<h1>Tabla de multiplicar del número: " + number + "</h1>");
for (var i = 1; i <=10; i++) {
    document.write(number + " X " + i + " = " +(i*number) + "</br>");
}

/*Este código de introducir un número lo hice yo solito :3 */


/*¿Cómo sacar todas las tablas de multiplicar */
/*Este me costo más trabajo de entender pero usamos 2 for el primero para iterar hasta que número vamos a ver las tablas de multiplicar; en este caso pusimos como límite el número 20 por lo tanto nos muestra la tabla del 1, del 2, del 3, del 4 y así hasta la tabla del 20; el for que esta dentro itera hasta que número va a mostrar la tabla, es decir 1*1, 1*2, 1*3, 1*4... y pusimos el número 10 */


for (let index = 1; index <=20; index++) {
    document.write("<h1>Tabla de multiplicar del número: " + index + "</h1>");
    for (let i = 0; i <=10; i++) {
        document.write(index + " X " + i + " = " +(i*index) + "</br>");
    }
}