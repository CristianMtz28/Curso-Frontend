'use strict'

//CREANDO UN NODO
// 1.- Crear el elemento
var caja = document.createElement('div'); 
// 2.- Crearemos el Texto
var contenidoNodo = document.createTextNode('Soy una caja totalmente creada con Javascript');
//3.- Juntaremos lo ya creado
caja.appendChild(contenidoNodo);
//4.- Agregando atributos 
caja.setAttribute('class', 'caja naranja');
//5.- Posicionarlo en nuestro documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

/*MODIFICAR REEMPLAZAR & ELIMINAR NODOS DEL DOM */

//----Modificando la clase o ID de un elemento

caja.id = 'primera'; /*Para cambiar un id debemos acceder a la variable de nuestro elemento, si no tenemos una variable la creamos 
pero en este caso tenemos la cariable caja y con .id accedemos al id del elemento y sólo debemos asignarle el id que nosotros querramos
que en este casi es 'primera'*/
caja.className = 'caja naranja'; /*Para cambair una clase de un elemento debemos acceder con el atributo .className y asignarlo el valor que querramos
en esta ocasión sólo le pondremos caja sin el naranja y así tendremos una cajita azul como las demás ya que no estamos indicandole el naranja
si tuvieramos una clase css llamada roja y un fondo rojo y se lo ponemos ahí lo obtendriamos */

//----Conociendo el elemento padre de un elemento
var cajas = document.getElementsByTagName('div'); //Asignamos el tagname del cual queremos saber cuál es el elemento padre en este caso el div
//y lo guardamos en una variable
//Instrucciones
cajas //Damos enter y nos regresará el arreglo HTMLCollection
cajas[0] //Nos indicará cuál es el primer elemento del HTMLCollection
cajas[0].parentNode;   //Con .parentNode sabremos cuál es el elemento padre de nuestro div en este caso cajas

console.log(cajas[0].parentNode)//Aunque también podríamos hacer esto xD (eso lo pensé yo sólo xD)

var padre = cajas[0].parentNode; //guardamos el elemento padre en una variale para poder insertarla dentro del elemento

padre.insertBefore(caja, caja3); //con esta acción le decimos que en padre (elemento padre). queremos colocar nuestra caja y con 
//insertBefore() insertamos lo que tengamos en nuestros parentesis que son los parametros a definir, en este caso colocaremos caja en el elemento
//padre antes del id caja2 por lo que nos quedaría entre la caja 1 y la caja 3
//EN AGREGANDO NODOS PODEMOS SUSTITUIR EL PASO 5 CON ESTE YA QUE ESTAMOS POSICIONANDOLO EN ESTA ACCIÓN

//---------REMPLAZANDO NODOS

padre.replaceChild(caja, caja3); //con el método replaceChil podemos reemplazar la caja que creamos por una que ya estaba

//-------ELIMINANDO NODOS

padre.removeChild(caja4); //Con este método escogemos que elemento queremos eliminar