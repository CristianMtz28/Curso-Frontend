'use strict'

//Parámetros

/**Una función además de ejecutar instrucciones también puede recibir parámetros que son variables que van alterar la lógica o el resultado que nos va a devolver la función; de esta manera podemos hacer mucho más reutilizable una función.

Por ejemplo vamos hacer una calculadora con una función, para eso no haremos 4 funciones diferentes para cada operación, una función para una suma, una para resta, etc, etc; ejemplo, tenemos la siguiente función:
*/

//Definición de la función
function calculadora(){
    //Conjunto de instrucciones a ejecutar
    console.log("Suma" + (10+25));
    console.log("Resta" + (10-25));
    console.log("Multiplicación" + (10*25));
    console.log("Divisón" + (10/25));
}

calculadora();

//En esta función nos esta creando varias instrucciones como hacer las operaciones matemáticas dentro de la misma función; SIN EMBARGO, los números son estáticos y si quisiera mostrar otros resultados tendría que cambiar el código, para eso sirven los PARÁMETROS, para que nosotros vayamos usando los parámetros para efectuar la función a corde necesitemos; los parámetros son cómo variables pero funcionan dentro de la misma función; una variable puede contener un parámetro (creo)


/*¿Cómo usamos los parámetros? 
Es muy sencillo para eso usaremos los parentesis que están a un lado del nombre de la función; definiremos los parámetros que recibiremos; ya con la definición de los parámetros podemos ir intuyendo que los número ya no van a ser fijos; ya que no declararemos 10 y 25 cómo en la función de arriba dónde allá sí son fijos; Entonces podemos canbiar los números por el nombre de los parámetros*/

//Definición de la función
function calculator(number1, number2){
    //Conjunto de instrucciones a ejecutar
    console.log("Suma" + (number1+number2));
    console.log("Resta" + (number1-number2));
    console.log("Multiplicación" + (number1*number2));
    console.log("Divisón" + (number1/number2));
}

/**Ahora a la hora de invocar la función podemos pasarle los parámetros en la invocación para que haga distintas acciones, con los datos que le pasaremos; ejemplo: */

calculator(11,10);
calculator(10,7);
calculator(28,25);