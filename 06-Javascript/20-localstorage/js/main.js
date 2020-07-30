'use strict'

/**LOCAL STORAGE

Local Storage nos permite guardar información en la computadora del usuario que este visitando el sitio web y esta usarla más adelante. Es cómo si tuvieramos una pequeña base de datos
en dónde podemos guardar cosas pequeñas como cadenas de texto, arrays, etc.
*/


/**SET ITEM */
localStorage.setItem('nombre', 'Cristian Martínez'); //Aquí estamos guardando el nombre de Cristian MArtínez en la computadora del usuario "para siempre" por eso es LOCAL Storage jaja entonces
//nosotros poniendo eso cuando el usuario cierre pestaña o el navegador lo estamos guardando ahí
document.write(localStorage.nombre); //Con esto lo invocamos
document.write('<br>');


/**REMOVE ITEM */
localStorage.removeItem('nombre'); //Aquí estamos eliminando lo que tenemos en el local storage y se a la hora de invocarlo con un alert, document o lo que sea se vería como undefinided
document.write(localStorage.nombre);
document.write('<br>');



/**SESSION STORAGE */
sessionStorage.nombre2 = 'Ximena'; 
document.write(sessionStorage.nombre2);