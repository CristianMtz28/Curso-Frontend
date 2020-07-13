// 'use strict'

// function hola() {
//     var texto = 'Hola Mundo';
//     alert(texto);
// }

// hola();

/**EVENTO DEL DOM 
Los eventos son otra parte muy importante de Javascript ya que con los eventos podemos hacer nuestros sitios webs interactivos
y con esto nos referimos a que el usuario pueda presionar un botón y este haga una acción.
Junto con el DOM son la base con la que se le da vida a una aplicación web; ya que le da parte interactiva*/

/*
Existen 3 modelos de Eventos

1.- MODELO BÁSICO DE EVENTOS
El módelo básico de ventos básicamente esta integrado con HTML; e spor eso que esta disponible en todos los navegadores web;
por ejemplo un onclick. Esto esta en nuestro HTML
<button onclick="saludo()"></button> Dónde con onlick estamos llamando la función que esta en nuestro archivo Javascipt
*/

function saludo(){
    alert('Hola');
}

function saludo2(){
    alert('Hola 2');
}

function saludo3(){
    alert('Hola 3');
}
//Sin embargo esta es una forma básica y sobretodo antigua; hoy en día ya no deberías usarla :( jajaja a  menos que quieras hacer pruebas


/*2.- MODELO DE EVENTOS ESTÁNDAR
Este es el más actualizado y es el modelo que normalmente se usa, también lo soportan todos los navegadores y podemos hacer muchas cosas 
más con él.
Para este ejemplo en vez de usar el onclick vamos a usar un id en el HTML; ejemplo:
<button id="btn-saludar">Saludo</button>
Y accederemos al botón mediante javascript
*/

var btnSaludar = document.getElementById('btn-saludar'); //Accedemos a nuestro HTML mediante el getElementById y lo guardamos dentro de una
//variable; recuerda que accedemos medante el id en el HTML
btnSaludar.addEventListener('click', saludo); //con addEventListener le decimos que al momento en que el usuario haga click, ejecute
//la función saludo

/*La ventaja de esto es que podemos agregar más eventos*/
btnSaludar.addEventListener('click', saludo2); //Estamos agregando dos funciones al mismo botón

btnSaludar.addEventListener('mouseenter', saludo3); //Con mouseenter al apenas entrar al elemento ejecuta la función, con solo pasar el mouse
//sin tener que darle click

btnSaludar.removeEventListener('click', saludo2);
btnSaludar.removeEventListener('mouseenter', saludo3); //Con removeEventListener quitamos eventos de escucha en este caso el saludo 2 y 3



/**CREANDO CAJAS CON JAVASCRIPT */

function crearCaja (){ //Creamos la función con la que crearemos las cajasa
    contenedor = document.getElementById('contenedor'); //seleccionaremos el elemento padre donde queremos incrustar el nuevo elemento
    var caja = document.createElement('div'); //Definimos el elemento que queremos crear 
    caja.className = 'caja'; //Le ponemos una clase
    contenedor.appendChild(caja); //Añadimos el elemento creado en el elemento padre
}

var btnCaja = document.getElementById('btn-caja'); //Obtenemos el botón que ejecutará la acción mediante el Id
btnCaja.addEventListener('click', crearCaja); //Escuchamos el evento mediante la función


/**EVENTOS MÁS UTILIZADOS
 * click
 * focus
 * blur
 * change
 * onload
 * mouseover
 * mousout
 * resize
 * submit
 */