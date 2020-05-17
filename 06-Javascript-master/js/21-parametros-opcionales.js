'use strict'

//PARÁMETROS OPCIONALES

/**los parámetros opcionales son los parámetros que no es obligatorio pasarle un resultado, sino que ya vienen inicializados con algo por defecto.
 * Ejemplo:
 * En el ejercicio de los parámetros nosotros definimos la función calculadora de la siguiente manera:

 * caluclator(number1, number2){
    #code
}

Dónde al poner number1 y number2 dentro de los parentesis hacemos que esos parámetros sean obligatorios; así que nosotros pasamos los parámetros de la siguiente manera:

calculator(28,25);

Sin embargo si nosotros hicieramos esto:

calculator();

El resultado nos arrojaría un error ya que los parámetros son OBLIGATORIOS pero con los parametros opcionales nosotros ya definimos que vienen inicializados con algo; ejemplo:
*/

function calculator(number1, number2, show = false){ //El show sería nuestro parámetro opcional ya que tiene por defecto 'false' y ya no va a ser obligatorio ponerle algo.

if(show == false){ //Con el if definimos que si el parámetro show es false (o sea que no le pasemos ningún resultado) Entonces muestra por consola los resultados.

    //Conjunto de instrucciones a ejecutar
    console.log("Suma" + (number1+number2));
    console.log("Resta" + (number1-number2));
    console.log("Multiplicación" + (number1*number2));
    console.log("Divisón" + (number1/number2));


} else{ //De lo contrario si nosotros llegaramos a pasarle un valor al parámetro entonces los resulatos de la calculadora los mostraremos en el cuerpo del documento
    //Conjunto de instrucciones a ejecutar
    document.write("Suma: " + (number1+number2) + "<br/>");
    document.write("Resta: " + (number1-number2) + "</br>");
    document.write("Multiplicación: " + (number1*number2) + "</br>");
    document.write("Divisón: " + (number1/number2) + "</br>");
}
}

calculator(10,25);
calculator(11,10, true);

/**Con esto podemos ir reutilizando la función tantas veces como queramos ya que en función de los parámetros que le vamos pasando y sumandole el parámetro 'show' que en esta ocasión funciona como flag (bandera) ya que el true o false nos dice a manera abrupta sí o no y si da sí hace una cosa y si da no hace otra. (valga la redundancia)*/