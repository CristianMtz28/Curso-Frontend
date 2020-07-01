'use strict'

/*CICLO WHILE
Con el ciclo While también podemos iterar y generar ciclos como con For, pero su estructura es diferente; depende la necesidad del proyecto
se puede usar for o while.

Estructura:
    while(condición){
        #codigo a ejecutar
        variable incrementandose. Si no la ponemos sería un ciclo infinito++;
    }
*/

var numero = 1;


while (numero <= 10) {
    document.write(numero + '</br>');
    numero++;
}

/*CICLO DO WHILE
El ciclo Do-While nos permite ejecutar nuestro ciclo al menos una vez; es decir:

do {
    este bloque de código al menos una vez y si se cumple la condición de abajo; vuelvela a ejecutar conforme dicte la condición
    no olvides poner el incrementador++;
} while(esta condición se debe cumplir para volver a iterar el código de arriba)
*/

var numero2 = 11;

do {
    document.write(numero2)
    numero2++;
} while (numero2 <= 10);