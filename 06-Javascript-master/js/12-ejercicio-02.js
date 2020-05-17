'use strict'

/*
EJERCICIO 2

Utilizando un bucle mostrar la media y la suma de los número introducidos hasta que
se ponga un número negativo.

Este código lo hice yo cuándo aún estaba en Kodistos, se recupero de las preguntas en el Master de Javascript
de Victor Robles de Udemy
*/

var sum = 0; //La suma se inicializa en 0 para poder ir añadiendo valores e irlos sumando
var count = 0; //El contador se inicializa en 0 para que cuando se introduzca un valor se sume 1 cada que se introduzca un nuevo valor

do {
    var number = parseInt(prompt('Introduce un número para calcular la media y la suma de los número que introduzcas; si quieres detenerte pon un número negativo', 0));
    //Definimos la variable número para recibir el valor que introduzca el usuario

    if(isNaN(number)){ //Con este If comprobamos que el usuario introduzca un valor válido, en caso de poner un carácter se contará como 0
        number = 0;
    } else if (number >= 0){
        sum = sum + number; //aquí le vamos sumando a la variable sum que es 0 el valor que introduzca el usuario:
        //sum = 0 + el número que introduzca el usuario y se sumaría algo parecido a: 0 + 12 + 12 = 24 + 6 = 30 + 10 = 40...
        //sum += number; Esta es otra forma de hacer la suma ya que a la variable sum se le suma el resultado de number que es el número introducido por el usuario
        count++; //Con este más más (++) hacemos que el contador se sume de uno en uno para que pueda sacar la media por el número de números que introdujo el usuario
    }

    console.log(sum); //Aquí mostraremos cómo va la suma por medio de la consola
    console.log(count); //Y veremos cómo el contador va cambiando de 1 en 1; ejemplo: 1 2 3 4 5 6...


} while (number>=0); //Y hará la comparación en cada ciclo que el usuario introduzca un número: "Mientras" el número que el usuario introduzca sea mayor o igual a 0 REPETIRÁ el Do y entrará al ciclo

alert('La suma de todos los número es: ' + sum); //Aquí nos mostrará el resultado de la suma de los números introducidos por el usuario debido a que la suma ya se hizo en el else if
alert('La media de todos los número es: ' + (sum/count)); //Ponemos por parentesis dentro de (sum/count) para que haga la operación de la suma de los número introducidos entre el número de número introducidos (count)
