'use strict'

/*CONSTANTES
Una constante no es más que un contenedor de datos, al igual que una
variable, simplemente que ese valor no va a poder modificarse en nuestro
programa; por eso se llama constante, porque es constante y nunca va a 
cambiar.
*/

var web = "http://cristianmtz.com";
const ip = "192.88.0.12";

web = "http://cristianmtz28.com";
// ip = "280614"
/*
Si tratamos de imprimir esto con la ip cambiada, nos va a dar un error
ya que una constante no puede ser cambiada, no importa el 
bloque de código donde se encuentre

if(true){
    ip = "201614";
    console.log(web,ip);
}

*/


console.log(web,ip);