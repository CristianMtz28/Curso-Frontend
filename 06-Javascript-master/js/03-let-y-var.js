'use strict'

/*
VAR Y LET
En Javascript ahora con los nuevos estándares, podemos definir las variables de 2 formas
la palabra reservada VAR y la palabra reservada LET.

var helloWorldVar = 'Hola Mundo con Var';
let helloWorldLet = 'Hola Mundo con Let';

La palabra reservada let es muy típica de typescript ya que la inluyó hace mucho tiempo y se viene utilizando
con los nuevos estándares de ecmascript* pero ahora ya se puede usar en Javascript normal

*ECMAScript es una especificación de lenguaje de programación publicada por ECMA International. 
El desarrollo empezó en 1996 y estuvo basado en el popular lenguaje JavaScript
propuesto como estándar por Netscape Communications Corporation. Actualmente está aceptado como el estándar ISO 16262.

*/

var helloWorldVar = 'Hola Mundo con Var';
let helloWorldLet = 'Hola Mundo con Let';

// alert(helloWorldVar);
// alert(helloWorldLet);

/*
Diferencia entre definir con VAR & LET

Let permíte definir variables limitando su alcance al bloque, declaración o expresión donde se esta usando y var
define una variable global o local en una función sin importar el ámbito del bloque
*/


//Ejemplo con VAR
var number = 40;
console.log(number) //El valor debe ser 40

if(true){
    var number = 50;
    console.log(number); //El valor debe ser 50
}

console.log(number); //El valor debe ser 50

//Ejemplo con LET
var text = 'Hola soy un ejemplo con Var';
console.log(text) //El valor debe ser Hola soy un ejemplo con Var

if(true){
    let text = 'Me volvi un let alv';
    console.log(text); //El valor debe ser Me volvi un let alv
}

console.log(text); //El valor debe ser Hola soy un ejemplo con Var

//Otro ejemplo parecdio a como lo hace Dario

const name = 'Cristian';
const lastname = 'Martínez';
let nickname = 'cristianmtz7';
console.log(name, lastname, nickname); //Se imprime Cristian Martinez cristianmtz7

if(true){
    let nickname = 'cristianmtz28';
    console.log(name, lastname,nickname); //Se imprime Cristian Martinez cristianmtz28
}

console.log(name, lastname, nickname); //Se imprime Cristian Martinez cristianmtz7

