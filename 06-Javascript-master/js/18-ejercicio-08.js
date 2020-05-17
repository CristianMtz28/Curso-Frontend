'use strict'

/*Ejercicio 8*/

/*Ejercicio de una calculadora
Crear una calculadora que pida 2 números por pantalla.
Si metemos mal un número que nos vuelva a pedir
Después que nos muestre en el body, en una alerta y en la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
*/

/**Comprobando el primer número */
var number1 = parseInt(prompt("Introduce el primer número",0));
while(number1 < 0 || isNaN(number1)){
    number1 = parseInt(prompt("El primer número no es válido; introducelo otra vez",0));
}
/**Comprobando el segundo número */
var number2 = parseInt(prompt("Introduce el segundo número",0));
while(number2 < 0 || isNaN(number2)){
    number2 = parseInt(prompt("El segundo número no es válido; introducelo otra vez",0));
}

/**Creando la calculadora por medio del body*/
document.write("<h1>Calculadora</h1>");
document.write("La suma del número " + number1 + " más el número " + number2 + " es igual a " +(number1+number2)+ "</br>");
document.write("La resta del número " + number1 + " menos el número " + number2 + " es igual a " +(number1-number2)+ "</br>");
document.write("La multiplcación del número " + number1 + " por el número " + number2 + " es igual a " +(number1*number2)+ "</br>");
document.write("La división del número " + number1 + " entre el número " + number2 + " es igual a " +(number1/number2)+ "</br>");

/**Por consola */
console.log("La suma del número " + number1 + " más el número " + number2 + " es igual a " +(number1+number2));
console.log("La resta del número " + number1 + " menos el número " + number2 + " es igual a " +(number1-number2));
console.log("La multiplcación del número " + number1 + " por el número " + number2 + " es igual a " +(number1*number2));
console.log("La división del número " + number1 + " entre el número " + number2 + " es igual a " +(number1/number2));

/**Por alerta */
alert("La suma del número " + number1 + " más el número " + number2 + " es igual a " +(number1+number2));
alert("La resta del número " + number1 + " menos el número " + number2 + " es igual a " +(number1-number2));
alert("La multiplcación del número " + number1 + " por el número " + number2 + " es igual a " +(number1*number2));
alert("La división del número " + number1 + " entre el número " + number2 + " es igual a " +(number1/number2));

/**Este código lo hice yo después de varios meses sin estudiar a full, no es el más limpio, ni el mejor, quizá pero pues me dió para hacerlo yo sólo, el código del vídeo es más limpio sin embargo ayuda a su objetivo, me gusató mi idea :3  */