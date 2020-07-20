'use strict'

/*Las sentencias break y continue nos permiten alterar en cierta medida el comportamiento de los ciclos como el for
y el while. Con estas sentencias podemos decirle a nuestro código si queremos que pare por completo el ciclo si sucede
cierta acción o queremos saltarnos a la siguiente iteración */

var amigos = ['Alejandro', 'Cesar', 'Manuel', 'Luis'];
var amigo;

/*SENTENCIA BREAK*/
/*La sentencia break nos permite cortar la ejecución de un ciclo completamente; por ejemplo en el arreglo amigos tenemos 4
nombres; pero podemos ponerle una condición, por ejemplo podemos decirle, cuando encuentres a Cesar ya no me muestres más del
arreglo
 */
document.write('<b>Break</b>');
document.write('<br>');


for (amigo in amigos){ //Declaramos el for para iterar el arreglo amigos en cada ranura de amigo
    document.write(amigos[amigo] + '</br>'); //imprmimos los amigos en pantalla
    if(amigos[amigo] == 'Cesar'){ //Le colocamos un condicional; en este caso; si encuentras a Cesar
        break; //Cortame la ejecución del ciclo completamente y vete al siguiente bloque de código
    }
}
document.write('<br>');
document.write('<b>Continue</b>');
document.write('<br>');


for (amigo in amigos){
    if(amigos[amigo] == 'Alejandro'){
        continue;
    }
    document.write(amigos[amigo] + '</br>');
}