'use strict'

/*Scope de Javascript
El Scope de Javascript o cómo también se le conoce el ámbito de las variables; esto se refiere al alcance que pueden tener nuestras variables
y que partes de nuestro código pueden acceder a estas variables y que otras partes no pueden.

Nuestras variables pueden ser de 2 tipos: Globa y Local
*/

/* Variable Local
Las variables locales son aquellas que han sido creadas dentro de una función y sólo pueden acceder dentro de ellas
*/

function saludo(){
    var texto = "Hola Mundo"; //Esta es una variable local ya que sólo pueden acceder desde dentro de esta función
    console.log(texto);
}
saludo();

//console.log(texto);  //Si yo llamo aquí a mi variable texto me va a decir que texto no esta definida ya que la estoy declarando dentro de
//la función; sí podría llamar la función saludo pero la variable por sí sola no.


/* Variable local con funciones anidadas
El scope funciona por niveles, si no encuentra una variable en el mismo nivel buscará de dentro hacía afuera o hacía arriba. Si 
no encuentra nada en ese nivel subirá otro y así sucesivamente.
Si tenemos una función anidada (una función dentro de otra) podemos buscar variables desde dentro hacía afuera, pero nunca una función
puede buscar variables hacía adentro de otra función.
*/

function saludo2(){
    var texto2 ='Hola Mundo 2';

    function mensaje(){
        console.log(texto2); //Aquí texto2 no encuentra una declaración de var texto2='Hola mundo 2'; en la función mensaje; por lo que buscó
        // en la función saludo2 dónde si hay una declaración de variable texto2; si no hubiera esta ahí buscaría en una función más arriba. En
        //caso de que existiera.
    }

    mensaje();
}

saludo2();

/*Variables Globales
Las variables globales pueden ser accedidas desde cualquier parte del código; sean funciones o lo que sea; con estas hemos trabajado
donde ponemos primero las variables desde afuera
*/

var texto3 = 'Hola Mundo 3'; //Variable Global

function saludo3() {
    console.log(texto3);
}

saludo3();

/*IMPORTANTE!
Si una variable se declara fuera de una función es global.
Pero las variables dentro de una función también pueden ser globales.

Si dentro de la función declaramos una variable mediante la palabra "var" será local. Pero si no le ponemos "var" será global
*/

function saludo4(){
    mensaje = 'Hola Mundo 4'; //Esta es una variable global porque no le pusimos var
}

saludo4();
console.log(mensaje);

var mensaje; //Sin embargo como yo uso el 'use strict' me marca un error; debo declarar esa variable de forma global

/*Como proteger nuestra variable de código de terceros. FUNCIONES AUTOINVOCADAS

Las funciones autoinvocadas nos permiten que nuestras variables que tengamos dentro las va a convertir en variables locales; por 
lo tanto el código que esta afuera no puede acceder a ellas
*/

(function(){
    var mensaje2 = 'Mensaje escrito desde una función autoinvocada';
    document.write(mensaje2); //Aquí sí podemos ejecutar el código
}())

var mensaje2 = 'Otro texto';
console.log(mensaje2); //Pero aquí ya no porque esta autoinvocada; así protegemos el código y podemos tener más variables con el mismo nombre
//esto se usa cuando utilizamos algún plugin o algo o código de terceros
