'use strict'

/*PRÁCTICA DE CALCULADORA; EL PRIMER PROGRAMA QUE HAGO CON HTML, CSS Y JAVASCRIPT <3

Para realizar la calculadora estamos usando las 3 tecnologías pilares que el navegador puede interpretar y leer que son
html que es el marcado y la estructura de nuestro sitio; css que es el estilo que se le da a nuestro sitio web y javascript
que es con el que hacemos funcionar el sitio.
Para la calculadora accederemos a los valores que el usuario añada y le regresaremos un resultado en pantalla.

Creando la función de la calculadora
*/

function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 +  numero2;

    document.getElementById('resultado').value = resultado;
}

/*
Este es todo el código que necesitamos; creamos la función para reutilizar el código y que funcione con lo que el usuario introduzca
en los inputs.
Guardamos lo que introduzca el usuario en una variable para poder utilizarlo.
Usamos parseFloat(); para convertir lo que el usuario introduzca en un número flotante (con décimales)
Usamos document. para acceder al documento HTML
.getElementbyId('id') lo usamos acceder al elemento mediante el id que declaramos en el HTML (em este caso numero1 y numero2).
Y usamos .value para obtener el valor que haya dentro del elemento.

Al final mostramos el resultado con getElementById en el input de resultado
.value para devolverle un valor que en este caso es la variable resultado que como vemos en el código es la suma de la variable numero1
más la variable numero2.

Para llamar esta función en nuestro código HTML al botón de resultado le colocamos el evento onClick="suma()"" para llamar a la función
que encierra todo el código.

*/