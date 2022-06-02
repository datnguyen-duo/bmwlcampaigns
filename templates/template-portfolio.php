<?php
/* Template Name: Portfolio */

$main_headline = get_field('main_headline');
$background_image = get_field('background_image');
$banner_text = get_field('banner_text');
$description_headline = get_field('description_headline');
$description = get_field('description');

$args = array(
    'post_type' => 'work',
    'posts_per_page' => '-1',
    'post_status' => 'publish',
);

$work = new WP_Query( $args );

get_header(); ?>

<div class="portfolio_wrap">
    <div class="portfolio_header" style="background: url('<?php echo $background_image["url"]; ?>') 50% 50% / cover;">

        <?php if($main_headline): ?>
            <h1 class="letter_wrap"><?php echo $main_headline; ?></h1>
        <?php endif; ?>
        <?php if($banner_text): ?>
            <div class="banner portfolio_first_banner">
                <div class="banner_section">
                    <p><?php echo $banner_text; ?></p>                
                </div>
            </div>
        <?php endif; ?>
        <div class="work_description">
            <?php if($description_headline): ?>
                <h2><?php echo $description_headline; ?></h2>
            <?php endif; ?>
            <?php if($description): ?>
                <p>
                    <?php echo $description; ?>
                </p>
            <?php endif; ?>
        </div>
    </div>
    
    <div class="portfolio_paralax_holder">
        <?php $counter=1; if ( $work->have_posts() ):
            while ( $work->have_posts() ):
                $work->the_post(); 
                $category_name = get_the_terms(get_the_ID(), 'categories')[0]->name;
                ?>

                <a href="<?php the_permalink(); ?>" class="section_parallax">
                    
                    <div class="project_info">
                        <p class="category">
                            <?php echo $category_name; ?>
                        </p>
                        <div class="container">
                            <p class="category_name">
                                <?php echo $category_name; ?>
                            </p>
                            <p class="project_name">
                                <?php the_title(); ?>
                            </p>
                        </div>
        
                        <div class="counter">
                            <div class="curent">0 <?php echo $counter; ?> </div>
                            <span>/</span>
                            <div class="total">0<?php echo $work->found_posts ?> </div>
                        </div>
                    </div>
                    
                    <div class="image_holder" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>');">
                        
                    </div>
                </a>

            <?php $counter++; endwhile; wp_reset_postdata();?>
        <?php endif; ?>
    </div>
    

    <?php get_template_part( 'template-parts/tmplt-footer'); ?>
</div>

<?php
get_footer(); ?>