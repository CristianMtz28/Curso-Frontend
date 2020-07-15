'use strict'
//VALIDACIÓN DE FORMULARIO
/*En esta sección veremos cómo validar un formulario de manera más real y los principios que esto conlleva.*/



//----------Guardamos cada uno de los elementos en una variable
    let formulario = document.getElementById('formulario');
    let nombre = formulario.nombre;
    let correo = formulario.correo;
    let sexo = formulario.sexo;
    let terminos = formulario.terminos;
    let error = document.getElementById('error');

    //Validamos el Nombre
    function validarNombre(e){ //Creamo la función para validar el nombre y le pásamos el parametro e para usar el e.preventDefault y así evitar
        //que el formulario se envíe en caso de que haya un error
        if(nombre.value == null || nombre.value == ''){ //Colocamos una condicional para validar si el nombre esta vacío 
            error.style.display = 'block'; //accedemos al let de error que hace referencia al name del formulario en el HTML y modificamos su
            //estilo con .style a su propiedad display y pasamos de none a block (Recuerda que esta none porque en el CSS lo ocultamos y en caso
            //de haber un error se mostraría)
            error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre</li>' //Insertamos el texto que queramos para el error
            e.preventDefault(); //En caso de que el error se ejecute entonces prevee la ejecución del formulario
        } else { //De lo contrario si el formulario es válido
            error.style.display = 'none'; //Entonces deja el error como display none y ejecuta el formulario
        }
    }

    //Validar el correo es igual que validar el nombre
    function validarCorreo(e){
        if(correo.value == null || correo.value == ''){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor completa el correo</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    //Validar el sexo que haya escogido el usuario
    function validarSexo(e){
        if(sexo.value == null || sexo.value == ''){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor selecciona tu género</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    //Validar los términos y condiciones
    function validarTerminos(e){
        if(terminos.checked == false){ //Aquí lo único que cambia es en vez de revisar el valor veremos que este palomeado el check
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor acepta los términos y condiciones</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }





    //Validar Formulario Completo
    function validarFormulario(e){ //Llamamos en una sóla función a todas las funciones de la validación para así compactar todo en una sola 
        //función

        error.innerHTML = ''; //Con esto reiniciamos el error y así no nos lo pone debajo

        validarNombre(e); //Hacemos la invocación de las funciones
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
    }

    formulario.addEventListener('submit', validarFormulario); //Por último agregamos un eschcucha (addEventListener) para que al momento en 
    //el que el usuario haga click ejecute la función de validarFormulario que a su vez ejecutará las funciones de validación


