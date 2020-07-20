'use strict'

/*Un arreglo es una variable que puede guardar multiples valores; a diferencia de una variable normal que sólo puede guardar o
un string o un numero o un booleano, etc. Un arreglo puede guardar varios y diferentes tipos de datos.
Por ejemplo un arreglo puede guardar un conjunto de datos */

//VARIABLE



var frutas = ['Plátano', 'Manzana', 'Sandía', 'Piña'];
var animales = ['Toro', 'León', 'Vaca', 'Jirafa'];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
            'Octubre', 'Noviembre', 'Diciembre'];

//document.write(meses[0]);   Recuerda que los arreglos empiezan desde 0 no desde 1 el 0 sería enero y el 1 febrero

console.log(meses);

/******************/

//Se pueden dejar los arreglos vacios y añadirlos después indicando la posición en la que los datos deberían de estar

var amigos = [];

amigos[0] = 'Cristian';
amigos[4] = 'Daniel';