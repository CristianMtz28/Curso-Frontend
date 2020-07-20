'use strict'

/*Ciclo For 
Los ciclos nos permiten repetir bloques de código cuantas veces querramos. Por ejemplo si queremos enumerar los número del 1 al 5
hasta el momento tendríamos que hacer esto:

document.write(1);
document.write(2);
document.write(3);
document.write(4);
document.write(5);

Así es muy repetido, ahora imaginate que tienes que enumerar del 1 al 1000; para eso nos sirven los ciclos para hacerlo de una forma muy fácil
y no hacerlo uno por uno
*/

/*Estructura del for.
Dentro del parentesis tenemos que poner 3 cosas:

1.- iniciación del ciclo con su punto y coma
2.- condición
3.- actualización

for(inicio; condición actualización;){
    código a ejecutar
}

*/
/*CICLO DEL 0 AL 10 */
document.write('<b>Ciclo del 0 al 10</b>');
document.write('</br>');
for(var i = 0; i<=10; i++ ){
    document.write(i + '</br>');
}
/*TRADUCCIÓN
for ( declaro e inicio mi variable en 0; la condición es lo que va a estar avaluando para que el código se ejecute; incremento de uno en uno){
    escribe el 0 y evalua la condición si se cumple, sigue hasta que ya no se cumpla;
}
*/

/**CICLO DEL 10 AL 0 */
document.write('<b>Ciclo del 10 al 0</b>');
document.write('</br>');
for(var o = 10; o>=0; o--){
    document.write(o + '</br>');
}

/*CICLO PARA RECORRER UN ARREGLO MEDIANTE FOR */
document.write('<b>Ciclo para recorrer un arreglo mediante For</b>');
document.write('</br>');

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
            'Octubre', 'Noviembre', 'Diciembre'];

for(var i = 0; i < meses.length; i++){ //se pone var i = 0; IGUAL A CERO porque los arreglos empiezan en 0
    document.write(i+1 +'.-' + meses[i] + '</br>');
}

/*CICLO PARA RECORRER UN ARREGLO MEDIANTE FOR IN
For In es una manera más sencilla de extraer un arreglo dentro d eun for; en este caso definimos primero la variable en la que se va
a extraer cada elemento del arreglo pero no le asignamos ningun valor; ya que se irá incrementando y llenando por cada elemento del arrelgo.
Después vamos a asignarle cada elemento a la variable en este caso asignarle cada mes desde meses y mostramos en pantalla

*/
document.write('<b>Ciclo para recorrer un arreglo mediante ForIn</b>');
document.write('</br>');
var mes;

for (mes in meses){
    document.write(meses[mes] + '</br>');
}

