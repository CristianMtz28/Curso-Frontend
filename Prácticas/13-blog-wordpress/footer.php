<footer>
	<div class="ad container hidden-xs">
		<div class="row">
			<div class="col-md-12">
				<img src="<?php bloginfo('template_url'); ?>/img/ad.jpg" alt="">
			</div>
		</div>
	</div>
	
	<nav class="menu">
		<div class="container">
			<div class="row">
				<?php wp_nav_menu(array(        
					    'container' => false,       
					    'menu_class' => '',        
					    'items_wrap' => '<ul class="col-md-12" target="_blank">%3$s</ul>',      
					    'theme_location' => 'menu-footer'
					  )); ?>
			</div>
		</div>
	</nav>
	
	<div class="copyright">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p>Sitio creado por Carlos Arturo - FalconMasters</p>
				</div>
			</div>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>