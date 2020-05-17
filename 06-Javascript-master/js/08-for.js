'use strict'

//CICLO FOR
/*
El ciclo for nos ayuda a iterar cierta parte del código para poder
generar código sin necesidad de estar repitiendo el código una
y otra vez; por ejemplo, si quisiera imprimir el número
del 0 al 100 en vez de hacer:

console.log(0);
console.log(1);
console.log(2);
console.log(3);

Y así hasta el número 100

usamos el ciclo for.

Para realizar el ejercicio de llegar al número 100 debemos declarar la variable
a la que queremos llegar.

var number = 100;

Ahora; la estructura del for es la siguiente:

Contador: Es una variable a la cuál se le suele llamar "i" y es la variable dónde va a 
iniciar nuestro ciclo for (En este caso como es del 0 al 100 iniciaría en 0)

Condición: Es la condición que evalua en que caso va a realizar el ciclo; o sea ¿Cuál es el tope
del ciclo? Y hasta que no se cumpla esa condición el ciclo for no se detendrá

Incrementador o Decrementador del Ciclo For: Aquí definimos cómo queremos que se vaya sumando el
ciclo for, de uno en uno, de dos en dos, de tres en tres... etc para uno por uno normalmente se usa el contador++
(i++) y para los demás números el i+2, i+3, dependiendo de que número en número querramos sumar.

for(contador; condición; incrementador){
    código a ejecutar
}

*/

//Ejemplo del 0 al 100

var number = 100;

for(var i=0; i<=100; i++){
    console.log(i);
}