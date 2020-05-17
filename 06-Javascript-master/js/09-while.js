'use strict'

//Bucle While

/*
El bucle while es parecido al bucle for, sólo que es menos estricto de forma que 
podemos hacer bucles infinitos y es un bucle indefinido; consta de una condición y cuando
se cumpla esa condición va a ejecutar un bloque de código.

Estructura del while
while (condition) {
    códgio a ejecutar
}

*/
console.log('Del 2019 al 2051');

var year = 2019;

while (year <= 2051) {
    //Ejecuta esto
    console.log('Estamos en el año: ' + year);
    year++; //Este iterador es el que le dice al while que vaya sumando de uno en uno ya que si no ponemos este
    //iterador el while sería infinito ya que year siempre va a ser menor a 2051; sin embargo cuando ponemos este
    //iterador se le va sumando uno al year y llegará el momento en el que empatará con el 2051 y el while dejará
    //de ejecutarse
}

//Si quiseramos ir del 2019 a 1994 sería de la siguiente manera:

//consoleLog para diferenciar uno y otro

console.log('Del 2019 a 1994');

while (year != 1994) {
    console.log('Estamos en el año : ' + year);
    year--;
}