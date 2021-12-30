<?php
/**
 * bmwl functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package bmwl
 */


if ( ! function_exists( 'bmwl_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function bmwl_setup() {

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'bmwl' ),
				'menu-2' => esc_html__( 'Footer1', 'bmwl' ),
				'menu-3' => esc_html__( 'Mobile', 'bmwl' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'bmwl_setup' );


/**
 * Enqueue scripts and styles.
 */
function bmwl_scripts() {
	wp_enqueue_style( 'bmwl-style', get_stylesheet_uri(), array(), '1.0' );
	wp_style_add_data( 'bmwl-style', 'rtl', 'replace' );
	wp_enqueue_script('images-loaded', 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js', true);
	wp_enqueue_script('barba','https://unpkg.com/@barba/core', array(), true);
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);
	wp_enqueue_script('loco-scroll', 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js', true);
	wp_enqueue_script('split-text', get_template_directory_uri() . '/js/SplitText.min.js', true);
	wp_enqueue_script('inertia', get_template_directory_uri() . '/js/InertiaPlugin.min.js', true);
	wp_enqueue_script('draggable', get_template_directory_uri() . '/js/Draggable.min.js', true);
	wp_enqueue_script( 'about-scripts', get_template_directory_uri() . '/js/about.js', array(), '1.0', true );
	wp_enqueue_script( 'global', get_template_directory_uri() . '/js/global.min.js', array(), '1.0', true );

	// $.getScript(site_data.theme_url + "/js/singleProject.js", function () {});
    // $.getScript(site_data.theme_url + "/js/home.js", function () {});
    // $.getScript(site_data.theme_url + "/js/services.js", function () {});
    // $.getScript(site_data.theme_url + "/js/about.js", function () {});
    // $.getScript(site_data.theme_url + "/js/portfolio.js", function () {});

	wp_localize_script('global','site_data',array(
        'site_url' => site_url(),
        'theme_url' => get_template_directory_uri(),
    ));

}
add_action( 'wp_enqueue_scripts', 'bmwl_scripts' );

if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Global Settings',
        'menu_title'    => 'Global Settings',
        'menu_slug'     => 'global-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}

function bmwl_post_types() {
    register_post_type('work',array(
        'supports' => array('title', 'thumbnail', 'page-attributes'),
        'has_archive' => false,
        'public' => true,
        'labels' => array(
            'name' => 'Work',
            'add_new_item' => 'Add New',
            'edit_item' => 'Edit',
            'all_items' => 'All',
            'singular_name' => 'Work',
            'search_items' => 'Search',
            'featured_image' => 'Work Image',
            'set_featured_image' => 'Set Work Image',
            'remove_featured_image' => 'Remove Work Image',
            'use_featured_image' => 'Use as Work Image'
        ),
        'menu_icon' => 'dashicons-clipboard',
    ));
}
add_action('init', 'bmwl_post_types');

function bmwl_taxonomies() {
    $labels = array(
        'name'              => _x( 'Category', 'taxonomy general name', 'textdomain' ),
        'singular_name'     => _x( 'Category', 'taxonomy singular name', 'textdomain' ),
        'search_items'      => __( 'Search', 'textdomain' ),
        'all_items'         => __( 'All', 'textdomain' ),
        'parent_item'       => __( 'Parent Type', 'textdomain' ),
        'parent_item_colon' => __( 'Parent Type:', 'textdomain' ),
        'edit_item'         => __( 'Edit Type', 'textdomain' ),
        'update_item'       => __( 'Update Type', 'textdomain' ),
        'add_new_item'      => __( 'Add New Type', 'textdomain' ),
        'new_item_name'     => __( 'New Type Name', 'textdomain' ),
        'menu_name'         => __( 'Category', 'textdomain' ),
    );
    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
    );
    register_taxonomy( 'categories', array( 'work' ), $args );

}
add_action( 'init', 'bmwl_taxonomies', 0 );


