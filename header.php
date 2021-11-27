<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package bmwl
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="stylesheet" href="https://use.typekit.net/upm6lfz.css">

	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script> 

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

<header>
	<div class="logo_holder">
		<img src="<?php echo get_template_directory_uri(); ?>/images/home/logo.svg" alt="">
	</div>

	<nav>
		<ul>
			<li>
				<a href="">About</a>
			</li>
			<li>
				<a href="">Work</a>
			</li>
			<li>
				<a href="">Services</a>
			</li>
		</ul>
		<div class="btn white">
			Contact
			<svg xmlns="http://www.w3.org/2000/svg" width="44.099" height="35.871" viewBox="0 0 44.099 35.871">
				<g id="Group_4451" data-name="Group 4451" transform="translate(0 0.707)">
					<path id="Path_47094" data-name="Path 47094" d="M6952.579,10920.357l17.228,17.23-17.228,17.227" transform="translate(-6927.122 -10920.357)" fill="none" stroke="#ededed" stroke-width="3"/>
					<line id="Line_186" data-name="Line 186" x1="42.693" transform="translate(0 17.228)" fill="none" stroke="#ededed" stroke-width="3"/>
				</g>
			</svg>
		</div>
	</nav>
</header>

