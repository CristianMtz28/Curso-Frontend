'use strict'

/*DOM (Document Object Module)
El DOM nos permite acceder y manipular los elementos de nuestro documentopara que enconjunto con javascript podamos hacer
aplicaciones web; sitios dinámicos.

El DOM es la estructura de nuestro sitio al checar el inspector de elementos podemos ver que se divide en 2 en el head y el body del
HTML; donde el body es el principal y más importante.

A cada elemento en el DOM se le conoce como nodo y los nodos son los que podemos obtener con javascript y modificarlos.
*/

//Vamos a obtener nuestros documentos desde el HTML para modificarlos con Javascript

var cajas = document.getElementsByTagName('div'); //Aquí le estamos diciendo obten los elementos del documento a través del nombre 
//de la etiqueta HTML; así accedemos a los divs de nuestro elemento y lo guardamos en una variable.
//Esto nos guarda los divs en un HTMLCollection que es un arreglo; puedes poner sólo la palabra cajas en la consola para verificarlo

cajas[0].textContent = 'Hola Mundo'; //Aquí estamos accediendo a nuestra primero posición del arreglo y con .textContent estamos reemplazando
//lo que teníamos en el HTML por lo que pongamos dentro; así modificamos el DOM con Javascript y este es un pequeño pasito y un pequeño
//parteaguas para poder empezar con aplicaciones webs

cajas[1].innerHTML = '<h1>Hola h1</h1>'; //Con innerHTML podemos inyectar código HTML a nuesro DOM

var cajas = document.getElementsByClassName('caja'); //Con este atributo accedemos a los elementos del DOM pero por la vía del classname
//de igual forma nos lo devuelve en un arreglo

document.getElementById('caja1'); //Aquí podemos acceder a cada elemento en particular por el id que le asignemos en el HTML. AQUÍ
//NO NOS REGRESA UN ARREGLO PORQUE ES UN ELEMENTO EN PARTICULAR


/*RECUERDA: LOS CLASS SON PARA CSS Y LOS ID PARA JAVASCRIPT ASÍ TIENES UN CONTROL FUNCIONAL Y ORDENADO*/

var primeraCaja = document.getElementById('caja1');

primeraCaja.textContent = 'Caja con ID';