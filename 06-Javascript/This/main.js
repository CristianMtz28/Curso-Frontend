'use strict'

/*Palabra reservada THIS

Para este ejemplo de la palabra reservada this, cambiaremos el color de las cajas al momento de darle click.
This nos ayuda a saber cuál elemento fue clickeado sin que nosotros lo sepamos; ya que "este" (this) elemento fue clickeado
entonces ejecuta esto
*/

var cajas = document.getElementsByClassName('caja'); //Obtenemos las cajas en un HTMLColection

function color() { //Creamos la función que hará el cambio de propiedad en este caso de color
    this.classList.toggle('negro'); //this. hace referencia a este (cualquiera de los elementos a dar click) .classList nos regresa las
    //clases CSS que tiene el elemento .toggle() alternamos por lo que pongamos dentro en este caso le ponemos la clase negro
}

for(var i = 0; i < cajas.length; i++){ //Con el for podemos complementar el código ya que la acción se va a realizar mientras la iteración sea
    //menor al número de cajas con .lenght vemos el número de cajas
    cajas[i].addEventListener('click', color); //ya sólo definimos el escucha al hacer un click y ejecutamos la función color.
    //cajas[i] se pone la i porque es la iteración del for
}

