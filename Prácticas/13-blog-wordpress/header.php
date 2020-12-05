<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/estilos.css">
	<title>
	    <?php if(is_home()){
	        echo get_bloginfo('name');
	    } else if (is_single()) {
	        echo the_title();
	    } else {
	        echo get_bloginfo('name');
	    }?>
	   
	  </title>
	  
	  <?php wp_head(); ?>
</head>
<body>
	<header>
		<div class="container">
			<div class="row">
				<div class="logo col-xs-12 col-sm-6">
					<a href="<?php bloginfo('url'); ?>"><img src="<?php bloginfo('template_url'); ?>/img/logo.png" alt="FalconMasters Logo"></a>
				</div>
				<div class="redes-sociales col-xs-12 col-sm-6">
					<a href="#" class="youtube"><i class="fa fa-youtube-play"></i></a>
					<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
					<a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
				</div>
			</div>
		</div>

		<nav class="menu">
			<div class="container">
				<div class="row">
					<!--<ul class="col-md-12">-->
					<!--	<li><a href="#">HTML</a></li>-->
					<!--	<li><a href="#">CSS</a></li>-->
					<!--	<li><a href="#">Javascript</a></li>-->
					<!--	<li><a href="#">Jquery</a></li>-->
					<!--	<li><a href="#">Photoshop</a></li>-->
					<!--	<li><a href="#">Git</a></li>-->
					<!--</ul>-->
					<?php wp_nav_menu(array(
					    'container' => false,
					    'menu_class' => '',
					    'items_wrap' => '<ul class="col-md-12">%3$s</ul>',
					    'theme_location' => 'menu-top'
					  )); ?>
				</div>
			</div>
		</nav>
			
		<div class="ad container hidden-xs">
			<div class="row">
				<div class="col-md-12">
					<img src="<?php bloginfo('template_url'); ?>/img/ad.jpg" alt=" ">
				</div>
			</div>
		</div>
	</header>