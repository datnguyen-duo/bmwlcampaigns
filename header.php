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

$email = get_field('email', 'option');
$phone = get_field('phone', 'option');
$address = get_field('address', 'option');
$social_networks = get_field('social_networks', 'option');
$contact_headline = get_field('contact_headline', 'option');
$contact_description = get_field('contact_description', 'option');
$contact_thank_you_message_first = get_field('contact_thank_you_message_first', 'option');
$contact_thank_you_message_second = get_field('contact_thank_you_message_second', 'option');
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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/Draggable.min.js"></script>
	

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>  data-barba="wrapper">
<?php wp_body_open(); ?>

<div class="contact_popup_holder">
	<div class="contact_popup">
		<div class="close_contact_popup">
			<span>Close</span>
		</div>

		<div class="content">
			<div class="success_message_wrap">
				<div class="success_message">
					<video class="thevideo" loop autoplay playsinline="true" muted="muted">
						<source src="<?php echo get_template_directory_uri(); ?>/videos/contact_grey.mp4#t=0.1" type="video/mp4">
					</video>
					<h2>
						Thank you, <span>Name</span>!
					</h2>

					<h3>
						<?php echo $contact_thank_you_message_first; ?>
					</h3>
					<p>
						<?php echo $contact_thank_you_message_second; ?>
					</p>

					<a class="btn close_contact_popup_btn">
						<span>
						Go Back Home
						</span>
					</a>
				</div>
			</div>
			<h2 class="form_headline"><?php echo $contact_headline; ?></h2>
			<p>
				<?php echo $contact_description; ?>
			</p>
			<div class="form_holder">
				<div class="form_header">
					<div class="single_form active" data-formid="work">
						<span>Work Inquries</span>
					</div>
					<div class="single_form" data-formid="meeting">
						<span>Request a Meeting</span>
					</div>
				</div>
				
				<?php echo do_shortcode('[contact-form-7 id="12" title="Work" html_id="work" html_class="active"]'); ?>
				<?php echo do_shortcode('[contact-form-7 id="11" title="Meeting" html_id="meeting"]'); ?>
				
			</div>
		</div>
		<div class="contact_footer">
			<div class="contact_footer_content">
				<div class="left">
					<span>
						Contact Us
					</span>
					<?php if($address): ?>
						<p>
							<?php echo $address; ?>
						</p>
					<?php endif; ?>

					<?php if($phone): ?>
						<a href="tel:<?php echo $phone; ?>">
							<?php echo $phone; ?>
						</a>
					<?php endif; ?>

					<?php if($email): ?>
						<a href="mailto:<?php echo $email; ?>">
							<?php echo $email; ?>
						</a>
					<?php endif; ?>
				</div>
				<div class="right">
					<span>
						Follow Us
					</span>
					<?php if($social_networks): ?>
						<div class="right_content">
							<?php foreach ($social_networks as $singleNetwork): ?>
								<a href="<?php echo $singleNetwork['single_network']['url'] ?>" target="<?php echo $singleNetwork['single_network']['target'] ?>">
									<span>
										<?php echo $singleNetwork['single_network']['title'] ?>
									</span>
								</a>
							<?php endforeach; ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="single_team_popup">
	<div class="single_team_popup_content">
		<div class="close_team_popup">
			<span>Close</span>
		</div>
		<div class="content">
			<div class="team_header">
				<div class="image_holder">
					<img src="<?php echo get_template_directory_uri(); ?>/images/about/team1.png" alt="">
				</div>
				<h2 class="letter_wrap_scroll">John Whitehurst</h2>
				<h3>Principal</h3>
			</div>
			<div class="team_description">
				<div class="left">
					<div class="image_holder">
						<img src="<?php echo get_template_directory_uri(); ?>/images/about/team1.png" alt="">
					</div>

					<div class="team_info">
						<div class="single_info contact">
							<span>Contact</span>
							<a href="" class="contact">Email Address</a>
						</div>
						<!-- <div class="single_info">
							<span>Follow</span>
							<a>Social Media 1</a>
							<a>Social Media 1</a>
						</div> -->
					</div>
				</div>
				<div class="right">
					<p>
						John has directed more than 200 political campaigns over the last 25 years. He has one of the best win records in California, guiding candidates and ballot measures to victory throughout the state. <br><br> John has helped hospitals, schools, colleges and transportation systems secure billions of dollars in public finance measures at the ballot. He has managed successful independent expenditure campaigns for labor and business interests and led groundbreaking candidate campaigns. <br><br>John has helped candidates win at every level of government, including Santa Clara Supervisor Susan Ellenberg, Supervisor Catherine Stefanie, former San Francisco Mayor Willie L. Brown, Jr., former State Senate President Pro Tem Don Perata, San Francisco City Attorney Dennis Herrera, California Governor Jerry Brown and former State Senators Mark Leno and Noreen Evans. Prior to co-founding Whitehurst/Mosher, John started Whitehurst Campaigns and worked at Clinton Reilly Campaigns. His first professional political campaign was Gary Hart for President in 1984 where he learned to organize in Iowa, Pennsylvania and California. <br><br> John holds a Bachelors Degree in Political Science from American University. John loves all things Italian — from traveling to Italy to enjoying Italian food and wine. Currently, he is learning how to play the guitar.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="viewport" class="loading">

<header>
	<a href="/" class="logo_holder">
		<img src="<?php echo get_template_directory_uri(); ?>/images/home/logo.svg" alt="logo" class="light">
		<img src="<?php echo get_template_directory_uri(); ?>/images/logo_dark.svg" alt="logo" class="dark">
	</a>

	<div class="close_nav">
		<span>
			Close
		</span>
	</div>

	<div class="nav_opener">
		<span></span>
		<span></span>
		<span></span>
	</div>

	<nav class="desktop">
		<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary',
					'container' => false,
				)
			);
		?>
		<div class="btn white contact_popup_opener">
			<span>
				Contact
			</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="44.099" height="35.871" viewBox="0 0 44.099 35.871">
				<g id="Group_4451" data-name="Group 4451" transform="translate(0 0.707)">
					<path id="Path_47094" data-name="Path 47094" d="M6952.579,10920.357l17.228,17.23-17.228,17.227" transform="translate(-6927.122 -10920.357)" fill="none" stroke="#ededed" stroke-width="3"/>
					<line id="Line_186" data-name="Line 186" x1="42.693" transform="translate(0 17.228)" fill="none" stroke="#ededed" stroke-width="3"/>
				</g>
			</svg>
		</div>
	</nav>

	<div class="mobile_nav">
		<div class="nav_content">
			<?php
			wp_nav_menu(
					array(
						'theme_location' => 'menu-3',
						'menu_id'        => 'mobile',
						'container' => false,
					)
				);
			?>
		</div>
		<div class="form_holder">
			<span>Sign Up For Email Updates</span>
			<?php echo do_shortcode('[contact-form-7 id="290" title="Footer Form"]'); ?>
		</div>
	</div>
</header>

<div id="page" class="site barba-container" data-barba="container" data-barba-namespace="<?php echo the_title()?>">