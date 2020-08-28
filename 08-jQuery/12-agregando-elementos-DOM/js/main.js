'use strict'

/**AGREGANDO ELEMENTOS AL DOM CON JQUERY

*/

$(function(){

    var contenedor= $('#contenedor'); //guardamos nuestro elemento donde accedemos al contenedor dentro de una variable
    var contador = 1; //ponemos el contador en 1

    $('#agregar').on('click', function(){ //Accedemos al elemento del botón para agregar la cara
        var caja= $('<div></div>').attr('class', 'caja').text(contador); //guardamos la creación de nuestra caja en una variable llamada caja y para crear un elemento (el que sea) va dentro del parentesis con las etiquetas html en este cas ('<div></div>') con el . attr (de atributo) y le añadimos el atributo junto con su valor en este caso la clase caja y añadimo el texto con la variable contador que lo tenemos en 1 para que vaya aumentando
        contador++; //nuestro contador irá aumentando gracias al incremento que tenemos aquí

        //Agregando la caja al contenedor
        contenedor.append(caja); //por último para agregar la caja en el contenedor ponemos la variable contenedor (la cual ya tiene el valor de acceder al elemento contenedor) .append (que nos incrustará el elemento dentro de contador) y cuál elemento pues el de la variable caja que ya tiene creada la caja; es lo mismo que poner esto:
        // $('contenedor').append('<div></div>').attr('class', 'caja').text(contador); dentro de la función 

        //CON APPEND PONEMOS LOS NÚMERO EN 12345...
        //CON PREPEND PONEMOS LAS CAJAS EN ...54321
        //CON BEFORE PONEMOS LAS CAJAS ANTES DEL CONTENEDOR (O SEA AFUERA PERO ARRIBA DEL CONTENEDOR)
        //CON AFTER PONEMOS LAS CAJAS DESPUÉS DEL CONTENEDOR (O SEA AFUERA PERO ABAJO DEL CONTENEDOR)

    });






});