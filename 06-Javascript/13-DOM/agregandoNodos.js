'use strict'

/*AGREGANDO NODOS MEDIANTE JAVASCRIPT
En el ejercicio tenemos 4 cajas con texto pero que pasaría si queremos agregar una quinta, sexta o séptima caja
para eso vamos aprender como agregar Nodos con Javascript, recuerda que los nodos son los elementos que están dentros de nuesto
body de HTMl como una etiqueta section, un div, un h1 todos esos son Nodos por separados. INCLUSO EL TEXTO DENTRO DE UN H1 O UN P ES 
UN NODO TOTALMENTE DIFERENTE
*/

//-------Pasos para crear Nodos

// 1.- Crear el elemento
var caja = document.createElement('div'); /*Aquí estamos creando el elemento; el elemento lo estamos guardando dentro de una variable
que en este caso se llama caja y con document. accedemos al documento y con createElement indicamos que queremos crear un elemento y por
último entre los parentesis y las comillas le decimos que elemento queremos crear, en este caso un div */

// 2.- Crearemos el Texto (O lo que vaya dentro del Nodo creado)
var contenidoNodo = document.createTextNode('Soy una caja totalmente creada con Javascript'); /*Cómo dijimos en la introducción el texto que 
esté dentro del div que creemos es un nodo totalmente diferete y también se tiene que crear por a parte */

//3.- Juntaremos lo ya creado
caja.appendChild(contenidoNodo); /*Lo que estamos haciendo aquí es tomar la variable caja que es nuestro elemento div creado y con 
appendChild le estamos incrustando, inyectando, metiendo o como quieras llamarle lo que esta dentro de la variable del parentesis que en este
casp es contenidoNodo que es un texto */

//4.- Agregando atributos 
caja.setAttribute('class', 'caja naranja'); /*Los atributos son los que nosotros definimos en el HTML de esta forma estamos incrustando 
los mismos atributos para que pueda coexistir con nuestro código; el html tiene los siguientes atributos:
<div class="caja" id="caja1">Texto/div>
por ende tiene una clase llamada caja y esos atributos se los pasamos a nuestra caja. Aunque podemos poner los atributos que querramos.
POR EJEMPLO AÑADIREMOS DESPUÉS DE CAJA EL ATRIBUTO NARANJA YA QUE EN NUESTRO CSS TENEMOS UN BACKGROUND COLOR NARANJA
PARA QUE ESTE SEA DIFERENTE*/

//5.- Posicionarlo en nuestro documento

var contenedor = document.getElementById('contenedor'); /*Escogemos el contenedor y lo seleccionamos; ¿Esto por qué? porque queremos que dentro
de ese contenedor añadas el elemento que estoy creando */

contenedor.appendChild(caja); /*Aquí parecido a lo que habíamos hecho en el paso 3 incrustamos la caja dentro del contenedor para que aparezca
y con los atributos que le pasamos en el punto 4 obtiene el color y la forma */