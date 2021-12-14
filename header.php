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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/Draggable.min.js"></script>
	

	<?php wp_head(); ?>
</head>

<body <?php body_class("loading"); ?>>
<?php wp_body_open(); ?>

<div class="contact_popup_holder">
	<div class="contact_popup">
		<div class="close_contact_popup">
			<span>Close</span>
		</div>

		<div class="content">
			<div class="success_message_wrap">
				<div class="success_message">
					<h2>
						Thank you, <span>Name</span>!
					</h2>

					<h3>
						Your Message Has Been Sent.
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec felis et diam feugiat placerat. In interdum nisl a tincidunt pharetra. elementum, dui ut cursus egestas.
					</p>

					<a class="btn close_contact_popup_btn">
						<span>
						Go Back Home
						</span>
					</a>
				</div>
			</div>
			<h2 class="form_headline">How can we help you?</h2>
			<p>
				BMWL is ready to talk with you about your campaign and the capabilities we offer to deliver a winning result.
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

					<p>
					312 Clay St, Suite 300 <br> Oakland, CA 94607
					</p>
					<a href="">
						415.615.0311
					</a>
					<a href="">
						info@whitehurstmosher.com
					</a>
				</div>
				<div class="right">
					<span>
						Follow Us
					</span>
					<div class="right_content">
						<a href="">
							<span>
								Facebook
							</span>
						</a>
						<a href="">
							<span>
								Instagram
							</span>
						</a>
						<a href="">
							<span>
								Linkedin
							</span>
						</a>
					</div>

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
					<img src="<?php echo get_template_directory_uri(); ?>/images/about/team.png" alt="">
				</div>
				<h2 class="letter_wrap_scroll">John Whitehurst</h2>
				<h3>Principal</h3>
			</div>
			<div class="team_description">
				<div class="left">
					<div class="image_holder">
						<img src="<?php echo get_template_directory_uri(); ?>/images/about/team.png" alt="">
					</div>

					<div class="team_info">
						<div class="single_info">
							<span>Contact</span>
							<a>Email Address</a>
						</div>
						<div class="single_info">
							<span>Follow</span>
							<a>Social Media 1</a>
							<a>Social Media 1</a>
						</div>
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

<div id="viewport">
<div id="page" class="site">

<header class="<?php if (is_page_template('templates/template-about.php') || is_page_template('templates/template-portfolio.php')): ?>dark<?php endif; ?>">
	<a href="/" class="logo_holder">
		<?php if (is_page_template('templates/template-about.php') || is_page_template('templates/template-portfolio.php')): ?>
			<img src="<?php echo get_template_directory_uri(); ?>/images/logo_dark.svg" alt="">
		<?php else: ?>
			<img src="<?php echo get_template_directory_uri(); ?>/images/home/logo.svg" alt="">
		<?php endif; ?>
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
		<ul>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/portfolio">Work</a>
			</li>
			<li>
				<a href="">Services</a>
			</li>
		</ul>
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
				<li>
					<a href="">Contact</a>
				</li>
			</ul>
		</div>
		<div class="form_holder">
			<span>Sign Up For Email Updates</span>
			<form action="">
				<input type="email" placeholder="Enter your email">

				<div class="button_holder">
					
					<button class="arrow">
						
					</button>
					
				</div>
			</form>
		</div>
	</div>
</header>
