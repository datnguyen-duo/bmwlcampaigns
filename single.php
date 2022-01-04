<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package bmwl
 */

get_header();

$client_name = get_field('client_name', get_the_ID());
$project_year = get_field('project_year', get_the_ID());

$about_project_headline = get_field('about_project_headline', get_the_ID());
$about_project_description = get_field('about_project_description', get_the_ID());
$about_project_image_1 = get_field('about_project_image_1', get_the_ID());
$about_project_image_2 = get_field('about_project_image_2', get_the_ID());
$about_project_image_3 = get_field('about_project_image_3', get_the_ID());
$about_project_image_4 = get_field('about_project_image_4', get_the_ID());
$about_project_second_headline = get_field('about_project_second_headline', get_the_ID());
$about_project_second_description = get_field('about_project_second_description', get_the_ID());

$project_gallery_headline = get_field('project_gallery_headline', get_the_ID());
$project_gallery_description = get_field('about_project_second_description', get_the_ID());
$project_gallery = get_field('project_gallery', get_the_ID());

$more_work_headline = get_field('more_work_headline', get_the_ID());
$more_work_call_to_action_question = get_field('more_work_call_to_action_question', get_the_ID());
$more_work_call_to_action = get_field('more_work_call_to_action', get_the_ID());

?>

<div class="single_project_wrap">

	<div class="project_hero">
		<div class="left">
			<div class="left_content">
				<div class="headline_wrap">
					<h1 class="letter_wrap"><?php the_title(); ?></h1>
				</div>

				<div class="project_info">
					<div class="single_info">
						<?php $category_name = get_the_terms(get_the_ID(), 'categories')[0]->name; ?>

						<?php if($category_name): ?>
							<span>Category</span>
							<p>
								<?php echo $category_name ?>
							</p>
						<?php endif; ?>
					</div>

					<div class="single_info">
						<?php if($client_name): ?>
							<span>Client</span>
							<p>
								<?php echo $client_name; ?>
							</p>
						<?php endif; ?>
					</div>

					<div class="single_info">
						<?php if($project_year): ?>
							<span>Year</span>
							<p>
								<?php echo $project_year; ?>
							</p>
						<?php endif; ?>
					</div>
				</div>
			</div>

		</div>
		<div class="right">
			<?php the_post_thumbnail(); ?>
		</div>
	</div>

	<div class="first_section">
		<div class="first_section_content">
			<?php if($about_project_headline): ?>
				<p><?php echo $about_project_headline; ?></p>
			<?php endif; ?>
			<?php if($about_project_description): ?>
				<h2><?php echo $about_project_description; ?></h2>
			<?php endif; ?>
		</div>
	</div>

	<?php if($about_project_image_1): ?>
		<div class="second_section">
			<div class="second_section_content">
				<div class="image_holder">
					<img src="<?php echo $about_project_image_1['url'] ?>" alt="<?php echo $about_project_image_1['alt'] ?>">
				</div>
			</div>
		</div>
	<?php endif; ?>

	<div class="third_section">
		<div class="third_section_content">
			<div class="left">
				<div class="image_holder_strap">
					<?php if($about_project_image_2): ?>
						<div class="image_holder">
							<img src="<?php echo $about_project_image_2['url'] ?>" alt="<?php echo $about_project_image_2['alt'] ?>">
						</div>
					<?php endif; ?>
				</div>

				<div class="image_holder_second">
					<?php if($about_project_image_3): ?>
						<div class="image_holder">
							<img src="<?php echo $about_project_image_3['url'] ?>" alt="<?php echo $about_project_image_3['alt'] ?>">
						</div>
					<?php endif; ?>
				</div>
			</div>
			<div class="right">
				<?php if($about_project_image_4): ?>
					<div class="image_holder">
						<img src="<?php echo $about_project_image_4['url'] ?>" alt="<?php echo $about_project_image_4['alt'] ?>">
					</div>
				<?php endif; ?>

				<div class="image_holder_second">
					<?php if($about_project_image_3): ?>
						<div class="image_holder">
							<img src="<?php echo $about_project_image_3['url'] ?>" alt="<?php echo $about_project_image_3['alt'] ?>">
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>

	<div class="fourth_section">
		<div class="fourth_section_inner">
			<div class="fourth_section_content">
				<div class="description">
					<?php if($about_project_second_headline): ?>
						<h2 class="letter_wrap"><?php echo $about_project_second_headline; ?></h2>
					<?php endif; ?>

					<?php if($about_project_second_description): ?>
						<p>
							<?php echo $about_project_second_description; ?>
						</p>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>

	<div class="fifth_section">
		<div class="fifth_section_content">
			
			<div class="fifth_section_header">
				<?php if($project_gallery_headline): ?>
					<h2 class="letter_wrap"><?php echo $project_gallery_headline; ?></h2>
				<?php endif; ?>

				<?php if($project_gallery_description): ?>
					<p>
						<?php echo $project_gallery_description; ?>
					</p>
				<?php endif; ?>
			</div>
			<div class="slider">
				<div class="image_slider">
					
					<?php foreach ($project_gallery as $singleImage): ?>
						<div class="image_holder">
							<img src="<?php echo $singleImage['image']['url'] ?>" alt="">
						</div>
					<?php endforeach; ?>
				</div>
				<div class="proxy-slider"></div>
			</div>

			<div class="swiper_indicator">
				<img src="<?php echo get_template_directory_uri(); ?>/images/black_arrow.svg" alt="">
				<span>Swipe</span>
				<img src="<?php echo get_template_directory_uri(); ?>/images/black_arrow.svg" alt="">
			</div>
		</div>
	</div>

	<div class="sixth_section">
		<?php 
			$next_post = get_next_post();
			$prev_post = get_previous_post();

			if( !$prev_post ):
			    $posts_query = new WP_Query(array(
			        'post_type' => 'work',
			        'posts_per_page' => 1,
			        'post_status' => 'publish',
					
			    ));

			    $prev_post = $posts_query->posts[0];
			endif;

			if( !$next_post ):
			    $posts_query = new WP_Query(array(
			        'post_type' => 'work',
			        'posts_per_page' => 1,
			        'post_status' => 'publish',
			        'order'=>'ASC',
			    ));

			    $next_post = $posts_query->posts[0];
			endif;

		?>
		<h2 class="mobile_nav_headline letter_wrap">More work</h2>
		<div class="sixth_section_content">
			
			<a href="<?php echo get_the_permalink($prev_post->ID); ?>" class="prev project_nav">
				<h3><?php echo $prev_post->post_title ?></h3>
				<div class="image_holder">
					
					<img src="<?php echo get_the_post_thumbnail($prev_post->ID) ?>" alt="">
				</div>
				<div class="prev_project">
				<div class="arrow"></div>
					Previous project
					
				</div>
			</a>

			<div class="mid_info">
				<h2 class="letter_wrap">More work</h2>
				<p>
					Or interested in working together?
				</p>
				<a class="contact_popup_opener">Reach out.</a>
			</div>

			<a href="<?php echo get_the_permalink($next_post->ID); ?>" class="next project_nav">
				<h3><?php echo $next_post->post_title ?></h3>
				<div class="image_holder">
					<img src="<?php echo get_the_post_thumbnail($next_post->ID) ?>" alt="">
				</div>
				<div class="next_project">
					Next project
					<div class="arrow"></div>
				</div>
			</a>
		</div>

		<div class="mid_info mobile">
			<p>
				Or interested in working together?
			</p>
			<a class="contact_popup_opener">Reach out.</a>
		</div>

		<?php get_template_part( 'template-parts/tmplt-footer'); ?>
	</div>
</div>

<?php

get_footer();
