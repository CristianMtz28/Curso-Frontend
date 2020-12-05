<?php get_header(); ?>

<div class="container">
	<div class="row">
		<section class="main col-md-8">
			<section class="row single-post">
				<h1>TE LA PELASTE ESTA PÁGINA NO EXISTE</h1>
				<h3>Revisa tu url o ve al inicio</h3>
			</section>
		
			<section class="row paginacion">
				<div class="col-md-12">
					<div class="pagination"><?php wp_pagenavi(); ?></div>
				</div>
			</section>
		</section>

		<?php get_sidebar(); ?>
	</div>
</div>

<?php get_footer(); ?>