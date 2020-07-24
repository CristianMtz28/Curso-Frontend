'use strict'

/**OBJETOS

Los objetos nos van a permitir trabajar de manera más limpia y ordenada cuando estemos programando para web aplications

Los objetos son parecidos a las variables pero estos pueden tener muchos valores; por ejemplo tenemos la variable nombre que simplemente puede guardar un valor.

 */

var nombre = 'Cristian';

//Podemos pensar que para guardar varios valores tenemos los arreglos.

var arreglo = ['Cristian', 'Daniel']; //Sí tenemos los arreglos pero también los objetos y tenemos una diferencia entre estos 2.

//EL ARREGLO SÓLO ME PERMITE GUARDAR VALORES
//OBJETOS NOS PERMITEN GUARDAR PARES DE VALORES

/*POR EJEMPLO GUARDEMOS EL NOMBRE, EDAD Y PAÍS DE UNA PERSONA */

var nombre = 'Cristian';
var edad = 25;
var pais = 'México';

//Aquí ya tenemos nuestros datos guardados y podemos acceder a ellas pero ¿Qué pasa si tenemos más personas?  tendríamos que hacer algo así:

var nombre2 = 'Ximena';
var edad2 = 24;
var pais2 = 'México';

//Aquí ya estamos creando demasiadas personas; entonces imaginate con 100 personas. ASÍ NO FUNCIONAN LAS COSAS. LO ARREGLAREMOS CON OBJETOS

//-------------OBJETOS

var cristian = {                    //Se declara como una variable pero va entre llaves
    nombre: 'Cristian Daniel',     //Dentro de las llaves se ponen las propiedades del objeto con una coma para diferenciarlos
    edad: 25,                      //En todos las propiedades del objeto se ponen : en vez de = 
    pais: 'México'                //El último no cierra con 
};                                //Aquí cerramos con llave y ponemos ahora sí el punto y coma para establecer que mi objeto terminó


var ximena = {
    nombre: 'Guadalupe Ximena',     
    edad: 24,                      
    pais: 'México' 
}


document.write(cristian.nombre);
document.write(' y ' + ximena.nombre);
document.write('<br>');
document.write('<br>');

/*Pero no sólo se pueden poner propiedades dentro de los objetos también se pueden poner métodos que un método básicamente es una función dentro de un objeto*/

var kyara = {
    nombre: 'Kyara Leopolda Martínez Hernández',
    edad: 4,
    pais: 'Kyaralandia',
    bio: function(){
        return this.nombre + ' tiene '  + this.edad + ' años de edad y ella vive en ' + this.pais; //Aquí lo importante es poner la palabra reservada this porque si no la ponemos 
        //a la hora de llamar a la función por un document o alrte o dónde sea no sabe que variables tomar.
    }
};

var nala = {
    nombre: 'La Gorda',
    edad: 3,
    pais: 'Nalaland',
    bio: function(){
        return this.nombre + ' tiene '  + this.edad + ' años de edad y ella vive en ' + this.pais;
    }
};

document.write(kyara.bio());
document.write('<br>');
document.write('<br>');
document.write(nala.bio());
document.write('<br>');
document.write('<br>');

/**--------------¿QUÉ PASA CUÁNDO NO SABEMOS CUÁNTOS OBJETOS TENEMOS? */

/**VAMOS A CREAR UN CONSTRUCTOR DE OBJETOS
El constructor de objetos nos permite crear objetos conforme los necesitemos en vez de tener que escribirlos al inicio cómo lo hicimos previamente
 */

function persona(nombre, edad, pais){  //Para el contructor necesitamos crear una función y el nombre de la función será el global de mi objeto en este caso una persona
    //dentro de los parentesis le enviaremos los parametros que tiene la persona, en este caso las personas tienen nombre, edad y pais

    this.nombre =  nombre; //Aquí definimos que el nombre de esta(this) persona va a ser igual al nombre que le pasaremos mediante el parametro
    this.edad = edad;
    this.pais = pais || 'España'; //Para definir la propiedad de un objeto podemos ponerla por default con el OR ya que si no se la pasamos como lo haremos en mama pone algo por defecto
}

var papa = new persona('Francisco', 45, 'México'); //Aquí para declarar un objeto ponemos "new persona()" y dentro de los parentesis colocaremos el valor de los parametros que leerá el contructor
//Así papa es un nuevo objeto

document.write(papa.nombre);

//YA CON ESTO PODEMOS CREAR TANTOS OBJETOS COMO QUERAMOS

var mama = new persona('Tere', 44);
document.write('<br>');
document.write('<br>');
document.write(mama.pais);


//Poniendo función en el constrctor

function doctor(nombre, apellido, cedula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.mostrarTodos = function() {
        return 'El Doctor ' + this.nombre + ' ' + this.apellido + ' tiene la cédula profesional: ' + cedula;
    }
}
const test = new doctor('José Ángel', 'Cornejo Arzate', 280614);
console.log(test.mostrarTodos());

/**AQUÍ ES CUANDO YA PODEMOS EMPEZAR A DEFINIR ROLES Y DEPARAR NUESTRO CÓDIGO UN POCO MÁS EJEMPLO */

function alumno(nombre, noCuenta, calificacion){
    this.nombre = nombre;
    this.noCuenta = noCuenta;
    this.calificacion = calificacion;
}

var rebollo = new alumno('Daniel Rebollo', 414013697, 10);
var manu = new alumno('Manuel Colín', 414013335, 9);

document.write('<br>');
document.write('<br>');
document.write(manu.nombre);
document.write('<br>');
document.write('<br>');
document.write(rebollo.calificacion);

/**Obviamente todavía faltan temas como la herencia que podemos definir una persona y una persona tiene nombre y apellido, ese sería el arquetipo pero un alumno y un profesor también tienen nombre
 * ese tema de la herencia se investigará por nuestra cuenta
 */