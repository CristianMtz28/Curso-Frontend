'use stric'

//Condicional Switch
/*
Es como el condicional If, sólo que este conidiconal se usa para casos
específicos, dónde, la función realizará una acción a partir de una
condición exacta predeterminada
*/

var age = 28;
var message = "";

switch (age) {
    case age=18:
        console.log('Eres mayor de edad');
    break;

    case age=21:
        console.log('Eres mayor de edad en todo el mundo');
    break;

    case age=30:
        console.log('Ya estás en el tercer piso');
    break;

    case age=50:
        console.log('Medio siglo quitando aire');
    break;

    default:
        console.log('Tu edad no genera un mensaje');
    break;
}