<?php
/**
 * The header for our theme
 *
 * @subpackage Soccer Academy
 * @since 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >

<?php
	if ( function_exists( 'wp_body_open' ) ) {
	    wp_body_open();
	} else {
	    do_action( 'wp_body_open' );
	}
?>
<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'soccer-academy' ); ?></a>
<?php if( get_option('soccer_academy_theme_loader',true) != 'off'){ ?>
	<div class="preloader">
		<div class="load">
			<hr/><hr/><hr/><hr/>
		</div>
	</div>
<?php }?>
<div id="page" class="site">
	<div id="header">
		<div class="wrap_figure">
			<div class="container">
				<div class="menu_header py-3 px-2">
					<div class="row">
						<div class="col-lg-2 col-md-4 align-self-center text-lg-left text-center">
							<div class="logo py-3 py-md-0  text-lg-left text-center">
								<?php if ( has_custom_logo() ) : ?>
					            	<?php the_custom_logo(); ?>
						    	<?php endif; ?>
					        	<?php $soccer_academy_blog_info = get_bloginfo( 'name' ); ?>
						        	<?php if ( ! empty( $soccer_academy_blog_info ) ) : ?>
						            	<?php if ( is_front_page() && is_home() ) : ?>
											<?php if( get_option('soccer_academy_logo_title',false) != 'off'){ ?>
						                    <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
											<?php }?>
						            	<?php else : ?>
										<?php if( get_option('soccer_academy_logo_title',false) != 'off'){ ?>
					                      	<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
										<?php }?>
					            	<?php endif; ?>
						        <?php endif; ?>
						        <?php
					                $soccer_academy_description = get_bloginfo( 'description', 'display' );
						            if ( $soccer_academy_description || is_customize_preview() ) :
						        ?>
								<?php if( get_option('soccer_academy_logo_text',true) != 'off'){ ?>
					                <p class="site-description"><?php echo esc_html($soccer_academy_description); ?></p>
					            <?php }?>
					        	<?php endif; ?>
							</div>
						</div>
						<div class="contact col-lg-2 col-md-4 col-6 align-self-center text-lg-left text-center">
							<?php if( get_theme_mod('soccer_academy_call_number') != '' || get_theme_mod('soccer_academy_email_address') != '' ){ ?>
								<div class="row contact-details py-1">
									<div class="col-lg-2 col-md-3 align-self-center"><i class="<?php echo esc_attr(get_theme_mod('soccer_academy_contact_icon','fas fa-phone-volume')); ?>"></i></div>
									
									<div class="col-lg-10 col-md-9 align-self-center">
										<p class="mb-0"><?php echo esc_html(get_theme_mod('soccer_academy_call_number','')); ?></p>
										<p class="mb-0"><?php echo esc_html(get_theme_mod('soccer_academy_email_address','')); ?></p>
									</div>	
								</div>
							<?php }?>
						</div>
						<div class="col-lg-8 col-md-4 col-6 align-self-center">
							<div class="toggle-menu gb_menu text-center">
								<button onclick="soccer_academy_gb_Menu_open()" class="gb_toggle p-2"><i class="fas fa-ellipsis-h"></i><p class="mb-0"><?php esc_html_e('Menu','soccer-academy'); ?></p></button>
							</div>
				   			<?php get_template_part('template-parts/navigation/navigation'); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

