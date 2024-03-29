<?php
/**
 * Soccer Academy functions and definitions
 *
 * @subpackage Soccer Academy
 * @since 1.0
 */

//woocommerce//
//shop page no of columns
function soccer_academy_woocommerce_loop_columns() {
	
	$retrun = get_theme_mod( 'soccer_academy_archieve_item_columns', 3 );
    
    return $retrun;
}
add_filter( 'loop_shop_columns', 'soccer_academy_woocommerce_loop_columns' );
function soccer_woocommerce_products_per_page() {

		$retrun = get_theme_mod( 'soccer_academy_archieve_shop_perpage', 6 );
    
    return $retrun;
}
add_filter( 'loop_shop_per_page', 'soccer_woocommerce_products_per_page' );
// related products
function soccer_academy_related_products_args( $args ) {
    $defaults = array(
        'posts_per_page' => get_theme_mod( 'soccer_academy_related_shop_perpage', 3 ),
        'columns'        => get_theme_mod( 'soccer_academy_related_item_columns', 3),
    );

    $args = wp_parse_args( $defaults, $args );

    return $args;
}
add_filter( 'woocommerce_output_related_products_args', 'soccer_academy_related_products_args' );
function soccer_academy_related_products_heading($translated_text, $text, $domain) {
    $heading = get_theme_mod('woocommerce_related_products_heading', 'Related products');

    if ($text === 'Related products' && $domain === 'woocommerce') {
        $translated_text = $heading;
    }
    return $translated_text;
}
add_filter('gettext', 'soccer_academy_related_products_heading', 20, 3);
// breadcrumb seperator
function soccer_academy_woocommerce_breadcrumb_separator($defaults) {
    $separator = get_theme_mod('woocommerce_breadcrumb_separator', ' / ');

    // Update the separator
    $defaults['delimiter'] = $separator;

    return $defaults;
}
add_filter('woocommerce_breadcrumb_defaults', 'soccer_academy_woocommerce_breadcrumb_separator');
//woocommerce-end//

// Get start function
function soccer_academy_custom_admin_notice() {
    // Check if the notice is dismissed
    if (!get_user_meta(get_current_user_id(), 'dismissed_admin_notice', true)) {
        // Check if not on the theme documentation page
        $current_screen = get_current_screen();
        if ($current_screen && $current_screen->id !== 'appearance_page_soccer-academy-guide-page') {
            $theme = wp_get_theme();
            ?>
            <div class="notice notice-info is-dismissible">
                <div class="notice-div">
                    <div>
                        <p class="theme-name"><?php echo esc_html($theme->get('Name')); ?></p>
                        <p><?php _e('For information and detailed instructions, check out our theme documentation.', 'soccer-academy'); ?></p>
                    </div>
                    <a class="button-primary" href="themes.php?page=soccer-academy-guide-page"><?php _e('Theme Documentation', 'soccer-academy'); ?></a>
                </div>
            </div>
        <?php
        }
    }
}
add_action('admin_notices', 'soccer_academy_custom_admin_notice');
// Dismiss notice function
function soccer_academy_dismiss_admin_notice() {
    update_user_meta(get_current_user_id(), 'dismissed_admin_notice', true);
}
add_action('wp_ajax_soccer_academy_dismiss_admin_notice', 'soccer_academy_dismiss_admin_notice');
// Enqueue scripts and styles
function soccer_academy_enqueue_admin_script($hook) {
    // Admin JS
    wp_enqueue_script('soccer-academy-admin.js', get_theme_file_uri('/assets/js/soccer-academy-admin.js'), array('jquery'), true);

    // Enqueue custom CSS for the dashboard
    wp_enqueue_style('soccer-academy-dashboard-css', get_theme_file_uri('/inc/dashboard/dashboard.css'));

    wp_localize_script('soccer-academy-admin.js', 'soccer_academy_scripts_localize', array(
        'ajax_url' => esc_url(admin_url('admin-ajax.php'))
    ));
}
add_action('admin_enqueue_scripts', 'soccer_academy_enqueue_admin_script');
// Reset the dismissed notice status when the theme is switched
function soccer_academy_after_switch_theme() {
    delete_user_meta(get_current_user_id(), 'dismissed_admin_notice');
}
add_action('after_switch_theme', 'soccer_academy_after_switch_theme');
//get-start-function-end//

// tag count
function display_post_tag_count() {
    $tags = get_the_tags();
    $tag_count = ($tags) ? count($tags) : 0;
    $tag_text = ($tag_count === 1) ? 'tag' : 'tags'; // Check for pluralization
    echo $tag_count . ' ' . $tag_text;
}

//media post format
function soccer_academy_get_media($type = array()){
	$content = apply_filters( 'the_content', get_the_content() );
  	$output = false;

  // Only get media from the content if a playlist isn't present.
  if ( false === strpos( $content, 'wp-playlist-script' ) ) {
    $output = get_media_embedded_in_content( $content, $type );
    return $output;
  }
}

// front page template
function soccer_academy_front_page_template( $template ) {
	return is_home() ? '' : $template;
}
add_filter( 'frontpage_template',  'soccer_academy_front_page_template' );

// excerpt function
function soccer_academy_custom_excerpt() {
    $excerpt = get_the_excerpt();
    $plain_text_excerpt = wp_strip_all_tags($excerpt);
    
    // Get dynamic word limit from theme mod
    $word_limit = esc_attr(get_theme_mod('soccer_academy_post_excerpt', '30'));
    
    // Limit the number of words
    $limited_excerpt = implode(' ', array_slice(explode(' ', $plain_text_excerpt), 0, $word_limit));

    echo esc_html($limited_excerpt);
}

// typography
function soccer_academy_fonts_scripts() {
	$soccer_academy_headings_font = esc_html(get_theme_mod('soccer_academy_headings_text'));
	$soccer_academy_body_font = esc_html(get_theme_mod('soccer_academy_body_text'));

	if( $soccer_academy_headings_font ) {
		wp_enqueue_style( 'soccer-academy-headings-fonts', '//fonts.googleapis.com/css?family='. $soccer_academy_headings_font );
	} else {
		wp_enqueue_style( 'soccer-academy-source-sans', '//fonts.googleapis.com/css?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900');
	}
	if( $soccer_academy_body_font ) {
		wp_enqueue_style( 'soccer-academy-body-fonts', '//fonts.googleapis.com/css?family='. $soccer_academy_body_font );
	} else {
		wp_enqueue_style( 'soccer-academy-source-body', '//fonts.googleapis.com/css?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900');
	}
}
add_action( 'wp_enqueue_scripts', 'soccer_academy_fonts_scripts' );

// Footer Text
function soccer_academy_copyright_link() {
    $footer_text = get_theme_mod('soccer_academy_footer_text', esc_html__('Soccer Academy WordPress Theme', 'soccer-academy'));
    $credit_link = esc_url('https://www.ovationthemes.com/wordpress/free-soccer-wordpress-theme/');

    echo '<a href="' . $credit_link . '" target="_blank">' . esc_html($footer_text) . '<span class="footer-copyright">' . esc_html__(' By Ovation Themes', 'soccer-academy') . '</span></a>';
}

// custom sanitizations
// dropdown
function soccer_academy_sanitize_dropdown_pages( $page_id, $setting ) {
	$page_id = absint( $page_id );
	return ( 'publish' == get_post_status( $page_id ) ? $page_id : $setting->default );
}
// slider custom control
if ( ! function_exists( 'soccer_academy_sanitize_integer' ) ) {
	function soccer_academy_sanitize_integer( $input ) {
		return (int) $input;
	}
}
// range contol
function soccer_academy_sanitize_number_absint( $number, $setting ) {

	// Ensure input is an absolute integer.
	$number = absint( $number );

	// Get the input attributes associated with the setting.
	$atts = $setting->manager->get_control( $setting->id )->input_attrs;

	// Get minimum number in the range.
	$min = ( isset( $atts['min'] ) ? $atts['min'] : $number );

	// Get maximum number in the range.
	$max = ( isset( $atts['max'] ) ? $atts['max'] : $number );

	// Get step.
	$step = ( isset( $atts['step'] ) ? $atts['step'] : 1 );

	// If the number is within the valid range, return it; otherwise, return the default
	return ( $min <= $number && $number <= $max && is_int( $number / $step ) ? $number : $setting->default );
}
// select post page
function soccer_academy_sanitize_select( $input, $setting ){  
    $input = sanitize_key($input);    
    $choices = $setting->manager->get_control( $setting->id )->choices;
    return ( array_key_exists( $input, $choices ) ? $input : $setting->default );      
}
// toggle switch
function soccer_academy_callback_sanitize_switch( $value ) {
	// Switch values must be equal to 1 of off. Off is indicator and should not be translated.
	return ( ( isset( $value ) && $value == 1 ) ? 1 : 'off' );
}
//choices control
function soccer_academy_sanitize_choices( $input, $setting ) {
    global $wp_customize; 
    $control = $wp_customize->get_control( $setting->id ); 
    if ( array_key_exists( $input, $control->choices ) ) {
        return $input;
    } else {
        return $setting->default;
    }
}
// phone number
function soccer_academy_sanitize_phone_number( $phone ) {
  return preg_replace( '/[^\d+]/', '', $phone );
}
// Sanitize Sortable control.
function soccer_academy_sanitize_sortable( $val, $setting ) {
	if ( is_string( $val ) || is_numeric( $val ) ) {
		return array(
			esc_attr( $val ),
		);
	}
	$sanitized_value = array();
	foreach ( $val as $item ) {
		if ( isset( $setting->manager->get_control( $setting->id )->choices[ $item ] ) ) {
			$sanitized_value[] = esc_attr( $item );
		}
	}
	return $sanitized_value;
}

// customizer-dropdowns
function soccer_academy_slider_dropdown(){
	if(get_option('soccer_academy_slider_arrows') == true ) {
		return true;
	}
	return false;
}
function soccer_academy_player_dropdown(){
	if(get_option('soccer_academy_player_show_hide') == true ) {
		return true;
	}
	return false;
}

// theme setup
function soccer_academy_setup() {	
	add_theme_support( 'woocommerce' );
	add_theme_support( "align-wide" );
	add_theme_support( "wp-block-styles" );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( "responsive-embeds" );
	add_theme_support( 'title-tag' );
	add_theme_support('custom-background',array(
		'default-color' => 'ffffff',
	));
	add_image_size( 'soccer-academy-featured-image', 2000, 1200, true );
	add_image_size( 'soccer-academy-thumbnail-avatar', 100, 100, true );

	$GLOBALS['content_width'] = 525;
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'soccer-academy' ),
	) );

	add_theme_support( 'html5', array(
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Add theme support for Custom Logo.
	add_theme_support( 'custom-logo', array(
		'width'       => 250,
		'height'      => 250,
		'flex-width'  => true,
		'flex-height' => true,
	) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );
	/*
	 * Enable support for Post Formats.
	 *
	 * See: https://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array('image','video','gallery','audio','quote',) );
	/*
	 * This theme styles the visual editor to resemble the theme style,
	 * specifically font, colors, and column width.
 	 */
	add_editor_style( array( 'assets/css/editor-style.css' ) );
}
add_action( 'after_setup_theme', 'soccer_academy_setup' );

// widgets
function soccer_academy_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'soccer-academy' ),
		'id'            => 'sidebar-1',
		'description'   => __( 'Add widgets here to appear in your sidebar on blog posts and archive pages.', 'soccer-academy' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget_container"><h3 class="widget-title">',
		'after_title'   => '</h3></div>',
	) );

	register_sidebar( array(
		'name'          => __( 'Page Sidebar', 'soccer-academy' ),
		'id'            => 'sidebar-2',
		'description'   => __( 'Add widgets here to appear in your pages and posts', 'soccer-academy' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget_container"><h3 class="widget-title">',
		'after_title'   => '</h3></div>',
	) );

	register_sidebar( array(
		'name'          => __( 'Sidebar 3', 'soccer-academy' ),
		'id'            => 'sidebar-3',
		'description'   => __( 'Add widgets here to appear in your sidebar on blog posts and archive pages.', 'soccer-academy' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget_container"><h3 class="widget-title">',
		'after_title'   => '</h3></div>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer 1', 'soccer-academy' ),
		'id'            => 'footer-1',
		'description'   => __( 'Add widgets here to appear in your footer.', 'soccer-academy' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer 2', 'soccer-academy' ),
		'id'            => 'footer-2',
		'description'   => __( 'Add widgets here to appear in your footer.', 'soccer-academy' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer 3', 'soccer-academy' ),
		'id'            => 'footer-3',
		'description'   => __( 'Add widgets here to appear in your footer.', 'soccer-academy' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer 4', 'soccer-academy' ),
		'id'            => 'footer-4',
		'description'   => __( 'Add widgets here to appear in your footer.', 'soccer-academy' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'soccer_academy_widgets_init' );

//Enqueue scripts and styles.
function soccer_academy_scripts() {

	require_once get_theme_file_path( 'inc/wptt-webfont-loader.php' );

	wp_enqueue_style('inter',
		wptt_get_webfont_url( 'href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' ),
		array(),
		'1.0'
	);

	//Bootstarp 
	wp_enqueue_style( 'bootstrap-style', get_template_directory_uri().'/assets/css/bootstrap.css' );	
	
	// Theme stylesheet.
	wp_enqueue_style( 'soccer-academy-style', get_stylesheet_uri() );

	// Theme Customize CSS.
	require get_parent_theme_file_path( 'inc/extra_customization.php' );
	wp_add_inline_style( 'soccer-academy-style',$soccer_academy_custom_style );

	//font-awesome
	wp_enqueue_style( 'font-awesome-style', get_template_directory_uri().'/assets/css/fontawesome-all.css' );

	// Block Style
	wp_enqueue_style( 'soccer-academy-block-style', get_template_directory_uri().'/assets/css/blocks.css' );

	//Owl Carousel CSS
	wp_enqueue_style( 'owl.carousel-style', get_template_directory_uri().'/assets/css/owl.carousel.css' );

	//Custom JS
	wp_enqueue_script( 'soccer-academy-custom.js', get_theme_file_uri( '/assets/js/theme-script.js' ), array( 'jquery' ), true );

	//Nav Focus JS
	wp_enqueue_script( 'soccer-academy-navigation-focus', get_theme_file_uri( '/assets/js/navigation-focus.js' ), array( 'jquery' ), true );

	//Bootstarp JS
	wp_enqueue_script( 'bootstrap-js', get_theme_file_uri( '/assets/js/bootstrap.js' ), array( 'jquery' ),true );

	//Owl Carousel JS
	wp_enqueue_script( 'owl.carousel-js', get_theme_file_uri( '/assets/js/owl.carousel.js' ), array( 'jquery' ),true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'soccer_academy_scripts' );

function soccer_academy_block_editor_styles() {
	// Block styles.
	wp_enqueue_style( 'soccer-academy-block-editor-style', trailingslashit( esc_url ( get_template_directory_uri() ) ) . '/assets/css/editor-blocks.css' );
}
add_action( 'enqueue_block_editor_assets', 'soccer_academy_block_editor_styles' );

# Load scripts and styles.(fontawesome)
add_action( 'customize_controls_enqueue_scripts', 'soccer_academy_customize_controls_register_scripts' );

function soccer_academy_customize_controls_register_scripts() {
	
	wp_enqueue_style( 'soccer-academy-ctypo-customize-controls-style', trailingslashit( esc_url(get_template_directory_uri()) ) . '/assets/css/customize-controls.css' );
}

// enque files
require get_parent_theme_file_path( '/inc/custom-header.php' );
require get_parent_theme_file_path( '/inc/template-tags.php' );
require get_parent_theme_file_path( '/inc/template-functions.php' );
require get_parent_theme_file_path( '/inc/customizer.php' );
require get_parent_theme_file_path( '/inc/dashboard/dashboard.php' );
require get_parent_theme_file_path( '/inc/typofont.php' );
require get_parent_theme_file_path( '/inc/breadcrumb.php' );
require get_parent_theme_file_path( 'inc/sortable/sortable_control.php' );