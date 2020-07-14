'use strict'

/*Trabajando con un Formulario

En desarrollo web; los formularios con javascript son muy comunes y se utilizan bastante
ya que les damos más seguridad y más vida para poder interactuar con el usuario
Javascript no sólo sirve para los formularios pero sí es una pieza importante
 */

var formulario = document.getElementById('formulario'); //mediante el ID accedemos al formulario
var nombre = formulario.nombre; //Para acceder al input de nombre es muy fácil ya que como ya tenemos la variable formulario y esa variable
//tiene todos los elementos del formulario entonces le decimos formulario.nombre ya que nombre es el name="nombre" de nuestro input.
var sexo = formulario.sexo;
var terminos = formulario.terminos;

//Validando el formulario

function validar(e) { //En esta práctica evitamos enviar el formulario, com o parametro a la función le pusimos e para ejecutar la instrucción 
    //de hasta abajo


    //Validando el nombre
    if(nombre.value.length > 18){ //Validamos si el nombre es menor a 18 caracteres
        alert('Máximo de carácteres permitidos'); //Enviamos el error
    } else if (nombre.value == ''){ //Validamos si el nombre esta vacio
        alert('Por favor ingresa un nombre'); //Enviamos el error
    }

    //Validando los radio button
    if(sexo[0].checked == false && sexo[1].checked == false){ //Revisamos que los 2 radio estén vacíos si sí están vacios
        //ejecuta la acción si al menos esta uno entonces es correcto
        //gracias al HTML podemos seleccionar una u otra ya que ambos tienen el mismo nombre
        alert('Por favor selecciona tu sexo'); //enviamos el error
    }

    //Validando Términos & Condiciones
    if(terminos.checked == false){ //Revisamos que los términos y condiciones estén marcados
        alert('Por favor acepta los términos y condiciones'); //mandamos el error en caso de que no este marcado
    } 


    e.preventDefault(); //con preventDefault() prevenimos la acción que debería hacer el formulario en este caso enviarse
}

formulario.addEventListener('submit', validar);

