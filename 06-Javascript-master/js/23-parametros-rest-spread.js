'use strict'

/*PARÁMETROS REST & SPREAD*/

//PARÁMETROS DE TIPO REST

/**Imaginemos que tenemos una función que se va a llamar listado de frutas y va a recibir diferentes parámetros, fruta1 y fruta2 y lo que va a hacer es devolver un console.log con el nombre de las frutas. */

function listFruits(fruit1, fruit2) {
    console.log("Fruta 1: ", fruit1);
    console.log("Fruta 2: ", fruit2);
    console.log("******************");
}

listFruits("Banana", "Manzana");

/**Bien, hasta aquí todo bien, pero ¿Qué pasa si yo quiero pasar una serie de parámetros que son indefinidos, por ejemplo, Sandia, Naranja, Uva, Melón, etc.
 * Bueno pues con el código de arriba no va a pasar nada, nosotros dentro de la invocación de la función podemos tener:
 * listFruits("Banana", "Manzana", "Sandia", "Naranja", "Uva", "Melón", "Pera"); etc.... Y sólo nos seguiría mostrando Banana y Manzana que son los únicos 2 parámetros que hemos recogido de la función, los demás no los av a tomar en cuenta y a veces nosotros no sabemis cuantos parámetros vamos a recibir; casi no se da el caso que sea así pero puede pasar. Para eso existen los parámetros REST, que, poniendo tres puntos y el nombre del parámetro nos pondría todos los parámetros que recibimos en un Array; ejemplo: 
 */

function listOfBooks(book1, book2, ...restOfBooks){
    console.log("Libro 1: ", book1);
    console.log("Libro 2: ", book2);
    console.log("Libros de mas: ", restOfBooks);
}

listOfBooks("Batman el Caballero de la Noche", "The Walking Dead", "Iker Casillas: La humiladad de un campeón", "El coronel no tiene quién le escriba", "Hamlet", "Romeo & Julieta", "Aprende a contar con el osito Tim");

/**Con esto ya podemos almacenar los parámetros extras en un Array. */

/**PARÁMETROS DE TIPO SPREAD */

/**Para estos parámetros al igual que la  */