<?php

/*Añadiendo imágenes al apartado de post y definiendo su tamaño*/
add_theme_support('post-thumbnails');

add_image_size('home-thumb', 745, 372, true);

/*Creando un menú*/

register_nav_menus(array(
    'menu-top' => 'Menú Prinicipal',
    'menu-footer' => 'Menú Footer'
));


?>