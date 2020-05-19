'use strict'

//COMENTARIOS
//Un comentario de código es un trozo de código que no se va a ejecutar
/*
Para comentar se usa // o en su defecto los slashes que usamos en este comentario
para así tener un comentario multilinea
*/


//VARIABLES
/*
Una variable es un contenedor de información, es cómo si tuvieras una caja y dentro guardarás datos; dichos datos contienen
strings, enteros, arrays, cualquier tipo de dato lo podemos guardar en un variable.
Para definir una variable en javascript debemos poner var y el nombre de la variable; ejemplo:

var country = 'México';

Dónde:

var es indicar que es una variable
country es el nombre de la variables
'México' es lo que contiene la variable que en este caso es un string
*/

var country = 'México';
var continent = 'America';
var year = 2019;
var countryAndContinent = country + ' ' + continent;

console.log(country);
console.log(country, continent, year);
alert(countryAndContinent);
alert(year);

//Recuerda que el código se ejecuta según lo definiste, si nosotros abajo de este comentario ponemos:

country = 'España'; //Aquí ya no haría falta poner var al principio porque la variable ya esta definida, sólo la redefiniremos

//Y ejecutamos un console log de country se ejecutará España en vez de México porque estamos redefiniendo
//la variable y estamos cambiando el valor dentro de la caja

console.log(country);
