'use strict'

//JQUERY AL DOCUMENTO
$(function(){
    

    //EFECTOS EN EL MENÚ
    $('.menu a').each(function(index){ // Seleccionamos los elementos a de nuestro menú en vez de ir seleccionando uno por uno así lo hacemos de forma global. Con el each le decimos que a cada uno de los enlaces le vamos a aplicar la función "en index" o sea uno por uno; parecido a un array dónde el primer elemento es la posición 0 y así sucesivamente 
        $(this).css({ //Aquí le indicamos que a estos elementos le aplicaremos cambios css
            top: '-200px' //En este caso -200px para esconderlo de inicio
        });

        $(this).animate({ //Le vovlemos a indicar que a estos elementos le aplicaremos una animación 
            top:'0' //De el top 0 para que vayan de los -200 a los 0 pixeles
        }, 2000 + (index * 500)); //Esta función nos permite darle el tiempo de 2 segundos para la ainmación pero con la concatenación del index * 500 hacemos que vaya aplicando el efecto de la posición 0 en consecuente * 500 milisegunos para que en vez de que el efecto se haga todo de golpe sea uno por uno
    });


    //EFECTO EN EL TEXTO DEL HEADER
    if($(window).width() > 800 ) { //Condicionamos a que el efecto sólo aparezca en dispositivos mayores a 800px de ancho
        $('header .textos').css({ //Seleccionamos el div textos del header y le aplicamos efectos css
            opacity: 0, //La opacidad la ponemos en 0
            marginTop: 0 //El margintop igual de 0 
        });

        $('header .textos').animate({ //Aplicamos la misma condición con una animación
            opacity: 1, //Pasamo la opacidad de 0 a 1
            marginTop: '-52px'  //En el header.scss pusimos el margin top de -52 para dejarlo más centrado, en el arranque de la animación en el margintop le pusimos 0; ahora con la animación lo volveremos a colocar en -52 para que quede centrado
        }, 2000); //Ya por último hacemos que el efecto dure 2 segundos
    }

    //ACTIVANDO EL MENÚ CON SCROLL

    //Variables
    var acercaDe = $('#acerca-de').offset().top; //Guardamos las secciones a donde queremos ir en una variable para acceder a ellas más facilmente
    var menu = $('#platillos').offset().top;
    var galeria = $('#galeria').offset().top;
    var ubicacion = $('#ubicacion').offset().top;

    //Acerca De
    $('#btn-acerca-de').on('click', function(e){  //accedemos al botón del menú mediante su id y le ponemos un evento click para que haga la función de hacer scrolltop (o sea irse al top de la sección)
        e.preventDefault(); //Con el e.preventDefault le decimos que no pongo en la url el típico .com#menu
        $('html, body').animate({ //Accedemos a modificar el html el body para la parte de hacer scroll ya que el scroll es parte de todo el conjunto html y del body aunque casi no se modifique 
            scrollTop: acercaDe //Con el scrolltop pasado de forma de obketo le decimos que hacer con la animación que en este caso hacer scroll hasta la parte de arriba de acercaDe que serí la parte de la sección que guardamos en la variable -100px ya que queda bien por el efecto parallax pero es cosa de ir jugando y midiendo
        }, 1000); //El tiempo que tardará en llegar o sea hacer la animación
    });

    //Menú
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 1000);
    });

    //Galería
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 1000);
    });

    //Ubicación
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion + 15
        }, 1000);
    });


    //EFECTO PARALLAX
    $(window).scroll(function(){ //Accedemos a la función scroll de nuestra ventana en general del navegador
		var windowWidth = $(window).width(); //Dentro de una variable guardamos el ancho de la ventana
		if (windowWidth > 800){ //Condicionamos; si el ancho de nuestra ventana es mayo a 800px entonces realiza esto:
			var scroll = $(window).scrollTop(); //Guardamos el scrollTop de nuestra página

			$('header .textos').css({ //Y le decimos que a los textos le modifiquemos el css
                'transform': 'translate(0px,' + scroll / 2 + '%)' //Transformemos su propiedad para trasladarlo de 0px a los lados y el scroll entre 2 más el porcentaje que tenga; o sea... 
                //Cuando el scroll se mueva hacía abajo traslademos lo que tenga el scroll entre 2 para que se muevan los textos
			});

			$('.acerca-de article').css({ //Aquí hacemos lo mismo para el article
				'transform': 'translate(0px, -' + scroll / 4 + '%)' //Y aquí le decimos que igual se traslade pero como este va a ser al revés de arriba a abajo le ponemos ese - antes para que haga la transición a la inversa
			});
		}
	});

	$(window).resize(function(){  //Ya por último con esta función le demos que si el usuario cambia de tamaño o sea el resize quite el efecto parallax para que no se vea mal en dispositivos móviles
		var windowWidth = $(window).width(); //guardamos el ancho de la pantalla pero en caso de que se reajuste el tamaño del sitio
		if (windowWidth < 800){ //Si es menor a 800 entonces:
			$('.acerca-de article').css({ //El css de acerca-de article
					'transform': 'translate(0px, 0px)' //Dejalo en px por 0px para que no se mueva
			});
		}
	});


});