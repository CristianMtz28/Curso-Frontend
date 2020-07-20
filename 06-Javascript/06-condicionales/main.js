'use strict'

/*Condicionales 
Una condicional es una estructura que nos permíte tomar decisiones depende de una condición que le pongamos; básicamente es la forma
en la que nuestro sitio web puede decidir que hacer en base a lo que haga el usuario y así nuestro sitio web se hace interactivo
*/

/*CONDICIONAL IF */

// si(pasa esto){
//     ejecuta esto
// } de lo contrario {
//     ejecuta esto
// }

/*Ejemplo de mayoría de edad */

var edad = 18;

document.write('<b>Condicional If</b>');
document.write('<br>');

if(edad>=18){
    document.write('Eres mayor de edad');
} else {
    document.write('No puedes acceder al sitio porque eres menor de edad');
}

document.write('<br>');
document.write('<br>');

/*CONDICIONAL ELSE IF  */

document.write('<b>Condicional Else-If</b>');
document.write('<br>');
var pais = 'España';

if(pais == 'México'){
    document.write('Eres mexicano');
} else if(pais == 'España'){
    document.write('Eres español');
} else {
    document.write('No eres ni de México ni de España');
}
document.write('<br>');
document.write('<br>');
/*CONDICIONAL SWITCH */

document.write('<b>Condicional Switch</b>');
document.write('<br>');

var equipo = 'Juventus';

switch(equipo){
    case'Real Madrid':
        document.write('Eres Madridista');
    break;
    
    case'Barcelona':
        document.write('Eres Culé');
    break;

    case'Atlético de Madrid':
        document.write('Eres Colchonero');
    break;

    case'Juventus':
        document.write('Le vas al Bicho, SIIIUUUU');
    break;

    default:
        document.write('No sé a que equipo le vas');
}