<?php
/**
 * The template for displaying all pages
 * 
 * @subpackage Soccer Academy
 * @since 1.0
 */
?>
<?php get_header(); ?>
<main id="content" class="site-main" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
		<div id="post-<?php the_ID(); ?>" class="outer-div">
			<?php if(has_post_thumbnail()){ ?>
	             <div class="single-post-image">
					<?php the_post_thumbnail(); ?>
				</div>
            <?php }
            else { ?>
            	<div class="header-image"></div>
            <?php } ?>
			<div class="inner-div">
				<?php //breadcrumb
				if ( !is_page_template( 'page-template/custom-home-page.php' ) ) { ?>
					<div class="bread_crumb single_breadcrumb align-self-center text-center">
						<?php soccer_academy_breadcrumb();  ?>
					</div>
				<?php } ?>
	    		<h2 class="text-center mt-4"><?php the_title();?></h2>				
	    	</div>
		</div>
	<?php endwhile; ?>
	<div class="content-area my-5">
		<div class="container">
			<?php while ( have_posts() ) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="entry-content">
						<?php the_content(); ?>
						<?php
							wp_link_pages( array(
								'before' => '<div class="page-links">' . __( 'Pages:', 'soccer-academy' ),
								'after'  => '</div>',
							) );
						?>
					</div>
				</article>
			<?php endwhile; // End of the loop. ?>
		<div class="clearfix"></div> 
		</div>	
	</div>
</main>
<?php get_footer(); ?>








	


