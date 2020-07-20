'use strict'

/**Timing - Timers, Timeout e Interval

El timing o eventos de tiempo nos permite ejecutar código después de que haya pasado algún tiempo o también por intervalos.
 */

//-------stTimeOut();

function saludo(){
    alert('Hola Mundo');
}

// setTimeout(saludo, 3000); 
//Con setTimeout ejecutamos el párametro que le pasemos en este caso la función saludo y después asignamos el
//intervalo de tiempo en el que queremos que haga la función; en este caso 3 segundos. pero se pone en milisegundos por eso es 3000

//Vamos hacer un botón que al presionarlo después de 3 segundo nos aviente la función saludo:
document.getElementById('btn-iniciar').addEventListener('click', function(){ //Accedemos al botón que creamos en el HTML mediante el ID
    //y le agregamos el evento escucha para que al hacer click ejecute la función
    setTimeout(saludo,3000); //La función de setTimeout
}); 

//Anulando el setTimeout()
//Para anular el tiempo tenemos la función clearTimeout; por ejemplo

function time (){
    alert('No me ejecutaré');
}

var tiempo = setTimeout(time, 2000); //Aquí ejecutaría el alert después de 2 seg entrando a la página
clearTimeout(tiempo); //Pero con esta función ya cancelamos el setTiemout pasandole la variable entre comillas


//------------setInterval()
//Con esta función realizamos la función cada cierto tiempo de forma infinita

function intervalo(){
    alert('Mensaje persistente');
}

// var interval = setInterval(intervalo, 5000);  //Nos mostraría el mensaje cada 5 segundos de namera infinita

//Esto nos ayuda a crear relojes, conometros, etc.

