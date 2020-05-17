'use strict'

/*EJERCICIO 04*/

/*
Mostrar los números impares que estén entre dos números introducios por el usuario
*/

var number1 = parseInt(prompt('Introduce el primer número', 0));
var number2 = parseInt(prompt('Introduce el segundo número', 0));

/*Código encontrado en la clase del curso , pasó un rato cómo 2 meses que programé así que veré el vídeo
y replicaré el código para que pueda tener un "refresh" en mi memoria de cómo programar*/

document.write("Los números impares entre " + number1 + " y " + number2 + " son: </br>");

for(var i=number1; i <=number2; i++){
    if (i%2!=0) {  //El % representa el resto de 2 por lo tanto es para los números impares
        document.write(i+"</br>");
    }
}


/*Este wey se rifó bien cabron y tiene una lógica bien simple:*/

/*Con el for hace un ciclo para pedi  */