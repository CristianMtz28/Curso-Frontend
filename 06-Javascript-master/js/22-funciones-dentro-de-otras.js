'use strict'

/**FUNCIONES DENTRO DE OTRAS */

/**Una función no forzosamente tiene que ser enorme; nosotros podemos tener una función dentro de otra función.
 * Por ejemplo en la clase anterior teníamos todo este código:
 * 
function calculator(number1, number2, show = false){ 
if(show == false){ 
    console.log("Suma" + (number1+number2));
    console.log("Resta" + (number1-number2));
    console.log("Multiplicación" + (number1*number2));
    console.log("Divisón" + (number1/number2));
} else{ 
    document.write("Suma: " + (number1+number2) + "<br/>");
    document.write("Resta: " + (number1-number2) + "</br>");
    document.write("Multiplicación: " + (number1*number2) + "</br>");
    document.write("Divisón: " + (number1/number2) + "</br>");
}
}
calculator(10,25);
calculator(11,10, true);

Todo eso dentro de una función; nosotros podemos definir esta función "en trozos más pequeños" para que puedan ser reutilizables y así llamar esa función dentro de otra; ejemplo:
*/

function forConsole(number1,number2) { //Definimos la función forConsole para que las la función haga una cierta acción en este caso mostrarnos los resultados de la calculadora por consola; esta función se va a encargar sólo de eso, de mostrarnos los resultados por consola
    console.log("Suma: " + (number1+number2));
    console.log("Resta: " + (number1-number2));
    console.log("Multiplicación: " + (number1*number2));
    console.log("Divisón: " + (number1/number2));
}

function forDisplay(number1, number2) { //De igual manera la función forDisplay se encargará de mostrarnos los resultados por pantalla; esa será su única razón de existir y para eso fue creada
    document.write("Suma: " + (number1+number2) + "<br/>");
    document.write("Resta: " + (number1-number2) + "</br>");
    document.write("Multiplicación: " + (number1*number2) + "</br>");
    document.write("Divisón: " + (number1/number2) + "</br>");
}

//Bien, cómo ya vimos tenemos 2 funciones diferentes, cada una de ellas se encarga particularmente de hacer una acción en este caso una nos mostrará los resultados por consola y la otra por pantalla; ahora nosotros podemos llamar estás funciones dentro de otra función que se encargará de llamar a estás funciones en caso de necesitar el resultado o acción de una función u otra.

function calculator(number1, number2, show = false) { //Creamos la función caluladora asignandole un parámetro opcional ya que este (cómo vimos en la clase pasada) nos servirá de bandera para poder realizar una función o la otra.
    if(show == false){ // Usamos un if dentro de la función para realizar "el banderazo" y saber que MÉTODO usamos; si usamos el MÉTODO forConsole o el MÉTODO forDisplay

    //*NOTA IMPORTANTE: CUANDO UNA FUNCIÓN ES LLAMADA POR OTRA FUNCIÓN MÁS GRANDE... EN ÉSTE CASO LA FUNCIÓN calculator() esta llamando o usando (cómo quieras verlo) a forConsole() y a forDisplay() estás dos funciones se convierten en MÉTODOS de la función calculator().
    /*O al menos eso pienso ahorita en éste momento, ya que cómo puso Victor Robles en una respuesta:
    
    "La diferencia es que un método es una función dentro de una clase u objeto :) "

    Cosa que me hace intuir que esto es un poco más a Programación Orientada a Objetos (POO)
    */

        forConsole(number1,number2); //Continuando con la explicación de la función; ahora ya podemos usar las funciones dentro de otra función.
    }else{
        forDisplay(number1,number2);
    }

    //Con esto decimos; si el parámetro es false entonces imprime por consola, si no viene en falsa y pusieron algo, entonces imprimelo por pantalla.

    return true; //El return sigue siendo una incógnita para mí...
}

calculator(10,5);
calculator(28,25, true);