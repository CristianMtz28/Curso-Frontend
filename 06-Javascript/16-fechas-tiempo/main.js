/**Fechas & Tiempo

Las fechas y el tiempo nos pueden ayudar para imprimir un año, una fecha en el que se realizó un blog, un tweet, una publicación, así como
cuando en un post dice "Hace 5 mins" y después de un tiempo aparece la fecha

Para trabajar con fechas necesitamos trabajar con un objeto de la siguiente manera
 */

var fecha = new Date();
//Fecha estándar
document.write('<b>Fecha estándar</b>' + '<br>');
document.write(fecha + '<br>');
document.write('<br>');

//Obtener sólo las horas
document.write('<b>Obtener sólo las horas</b>' + '<br>');
document.write(fecha.getHours() + ' Horas' + '<br>');
document.write('<br>');

//Obtener sólo las horas
document.write('<b>Obtener las horas en formato 24</b>' + '<br>');
document.write(fecha.getHours() + ' Horas' + '<br>');
document.write('<br>');

//Obtener sólo los minutos
document.write('<b>Obtener los minutos</b>' + '<br>');
document.write(fecha.getMinutes() + ' Minutos' + '<br>');
document.write('<br>');

//Obtener sólo los segundos
document.write('<b>Obtener los segundos</b>' + '<br>');
document.write(fecha.getSeconds() + ' Segundos' + '<br>');
document.write('<br>');

//Poniendo fecha y hora completa
document.write('<b>Obtener la hora</b>' + '<br>');
document.write(fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() + ' ' + fecha.getHours() + ':' + 
fecha.getMinutes() + ':' + fecha.getSeconds());
document.write('<br>');
document.write('<br>');

//Obtener el número de día o sea Domingo 0, Lunes 1, Martes 2 y así; no me dice que es Lunes primero si no que es el primer día de la semana
document.write('<b>Obtener en que día d ela semana estamos del 0 al 6</b>' + '<br>');
document.write(fecha.getDay() + ' día de la semana' + '<br>');
document.write('<br>');

var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles','Jueves', 'Viernes', 'Sábado'];

document.write('<b>Obtener el día en el que estamos</b>' + '<br>');
document.write(semana[fecha.getDay()]);

//COLOCANDO UN RELOJ

function mostrarFecha(){
    var fecha= new Date();
    var parrafo = document.getElementById('fecha');
    parrafo.innerHTML = fecha;
}

var intervalo = setInterval(mostrarFecha, 1000);