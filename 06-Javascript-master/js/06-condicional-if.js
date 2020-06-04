'use strict'

/*
CONDICIONAL IF

Un condicional es simplemente una estructura de control que nos van a permitir comparar algo
y si sucede dicha condición que suceda algo-
If es la condición más básica la cuál deriva de su palabra en inglés 'Si..'
es por eso que 'Si pasa algo... haz algo'
Su estructura es la siguiente:

if = nombre de la función
() = Indica la condición que vamos a tener
{} = Dentro va el bloque de código que se ejecutará en caso de que lo que esta dentro del parentesis
se cumpla; ejemplo:

si(Pasa esto){
    Entonces haz esto;
}

Dentro de la condición se usan los Operadores Relacionales que son los siguientes:

Mayor que >
Menor que <
Mayor o igual que >=
Menor o igual que <=
Igual ==
Exactamente igual === (Este compara hasta el tipo de dato)
Diferente !=
*/
var age1 = 30; //Definición de la variable la edad 1 es igual a 30
var age2 = 12; //Definición de la variable la edad 2 es igual a 12

if(age1 > age2){ //Si edad 1 es mayor a edad 2 entonces:
    console.log('La edad 1 es mayor que la edad 2'); //Imprime en consola el mensaje
} else { //De lo contrario si la edad 2 es mayor a la edad 1, entonces:
    console.log('La edad 1 es inferior'); //Imprime este otro mensaje
}

/*
Ejemplo más práctico
*/

var age = 17;
var name = 'Cristian Martínez';

if(age >= 18){
    console.log('Hola ' + name + ' tú eres mayor de edad porque tienes ' + age + ' años de edad');
} else {
    console.log('Hola ' + name + ' no puedes acceder al sitio porque tienes ' + age + ' años de edad');
}

/*
También podemos anhidar el If; ejemplo:
*/

var team = 'PSG';
var position = 1;

if(team == 'PSG'){
    alert('Es un equipazo');
    if(position == 1){
        alert('Son unos campeones');
    } else if(position == 2){
        alert('¡Uy! Casi...');
    } else {
        alert('Suerte para la próxima');
    }
} else {
    alert('¿Esos quiénes son?');
}

/*
También podemos hacer un else if(){
    Ver línea de código 64, 65 & 66
}

Que es ponerle una condición al else
*/


//OPERADORES LÓGICOS
/*
AND(Y): &&
OR(O):||
NEGACIÓN: !

*/

//Negación

var year = 2018;
if(year != 2020){
    console.log('El año es incorrecto; estamos en 2020');
}

//AND

if(year >= 2000 && year <= 2020){
    console.log('Estamos en la era actual');
}

//OR

if(year == 2008 || year == 2018){
    console.log('El año acaba en 8');
}