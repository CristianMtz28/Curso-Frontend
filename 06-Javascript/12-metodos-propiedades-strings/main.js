'use strict'

//MÉTODOS Y PROPIEDADES PARA STRINGS

var nombre = 'Cristian Martínez';

/*Lenght. 
Nos permíte saber el número de caracteres de una cadena de texto*/

var lenght = nombre.length;
console.log(lenght);

/*Substring
Nos permite extraer una parte de una cadena de texto; este método recibe 2 valores; el primero es el valor inicial y el segundo
la posición final
*/

var apellido = nombre.substring(9,17); //Aquí extraemos desde el caracter 9 al 17
console.log(apellido);

/*Replace
Con este método podemos reemplazar cadenas de texto
*/

var nombre2 = nombre.replace('Martínez', 'Daniel'); //Aquí accedemos a la variable que queremos reemplazar; usamos el método replace
//y ponemos el texto que queremos reemplazar, seguido del texto que queremos mostrar.
console.log(nombre2);

/*toUpperCase
Nos permíte transformar nuestro texto a todo mayúsculas
*/

var mayusculas = nombre.toUpperCase(); //No olvides poner los parentesis
console.log(mayusculas);

/*toLowerCase
Nos permíte volver todo niestro texto en mínusculas
*/

console.log(nombre.toLowerCase()); //Aquí sólo estamos llamando el método

/*IndexOf()
Nos permíte buscar la primera letra de una cadena de texto
*/

var posicion = nombre.indexOf('a'); //Aquí buscamos la letra a y nos va a encontrar la primera letra a que encuentre en el string
console.log(posicion); //La primera a de mi nombre se encuentra en la posición 6

/*LastIndexOf
Nos muestra el último caracter del string que busquemos; por ejemplo la misma a de arriba ya no sería el 6; veamos cual es
*/

var posicionUltima = nombre.lastIndexOf('a');
console.log(posicionUltima); //En este caso en mi nombre la últma a se encuentra en la posición 10

