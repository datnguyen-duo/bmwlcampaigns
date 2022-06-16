<?php
/* Template Name: Home */

$home_hero_image = get_field('home_hero_image');
$home_hero_video = get_field('home_hero_video');
$home_hero_banner_text = get_field('home_hero_banner_text');

$first_section_small_headline = get_field('first_section_small_headline');
$first_section_big_headline = get_field('first_section_big_headline');
$first_section_image = get_field('first_section_image');

$second_section_image = get_field('second_section_image');
$second_section_description = get_field('second_section_description');
$second_section_button = get_field('second_section_button');

$third_section_first_image = get_field('third_section_first_image');
$third_section_second_image = get_field('third_section_second_image');
$third_section_second_image_mobile = get_field('third_section_second_image_mobile');
$third_section_third_image = get_field('third_section_third_image');
$third_section_headline = get_field('third_section_headline');
$third_section_description = get_field('third_section_description');
$third_section_button = get_field('third_section_button');
$third_section_banner = get_field('third_section_banner');


$fourth_section_headline = get_field('fourth_section_headline');
$fourth_section_services = get_field('fourth_section_services');

$show_featured_project = get_field('show_featured_project');
$fifth_section_featured_project = get_field('fifth_section_featured_project');

$sixth_section_headline = get_field('sixth_section_headline');
$sixth_section_testimonials = get_field('sixth_section_testimonials');

$seventh_section_headline_1 = get_field('seventh_section_headline_1');
$seventh_section_headline_2 = get_field('seventh_section_headline_2');
$seventh_section_button = get_field('seventh_section_button');
$seventh_section_image = get_field('seventh_section_image');

get_header(); ?>

<div class="home_wrap">
    <div class="home_hero">
        <?php if($home_hero_video): ?>
            <video class="vid" muted autoplay loop playsinline>
                <source src="<?php echo $home_hero_video; ?>" type="video/mp4">
            </video>
        <?php elseif($home_hero_image): ?>
            <img class="vid-img" src="<?php echo $home_hero_image['url']; ?>" alt="<?php echo $home_hero_image['alt']; ?>">
        <?php endif; ?>
        <!-- <h1 class="letter_wrap_scroll">We Win For You</h1> -->

        <!-- <div class="cta_button">
            <span>
                Play Video
            </span>
            <img src="<?php echo get_template_directory_uri(); ?>/images/play_button.svg" alt="">
        </div> -->
        <a href="#intro" id="anchor"></a>
    </div>

    <div class="first_section" id="intro">
        <div class="first_section_content">
            <div class="left">
                <img class="logo__section" src="<?php echo get_template_directory_uri(); ?>/images/logo_dark.svg" alt="logo">
                <?php if($first_section_small_headline): ?>
                    <h2 class="letter_wrap"><?php echo $first_section_small_headline; ?></h2>
                <?php endif; ?>
            </div>
            <div class="right">
                <?php if($first_section_image): ?>
                    <div class="image_holder_wrap vscroll__up">
                        <div class="image_holder">
                            
                            <img src="<?php echo $first_section_image['url']; ?>" alt="<?php echo $first_section_image['alt']; ?>">
                            <?php if ($first_section_image["caption"]): ?>
                                <figcaption><?php echo $first_section_image["caption"] ?></figcaption>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <div class="second_section">
        <div class="second_section_content">
            <?php if($first_section_big_headline): ?>
                <h2 class="letter_wrap"><?php echo $first_section_big_headline; ?></h2>
            <?php endif; ?>
            
            <div class="image_text_section">
                <div class="left">
                    <?php if($second_section_image): ?>
                        <div class="image_holder fadein_wrap fadeIn">
                            <img src="<?php echo $second_section_image['url'] ?>" alt="<?php echo $second_section_image['alt'] ?>">
                        </div>
                    <?php endif; ?>
                </div>

                <div class="right">
                    <div class="right_content">
                        <img class="logo__section" src="<?php echo get_template_directory_uri(); ?>/images/logo_dark.svg" alt="logo">

                        <?php if($second_section_description): ?>
                            <p>
                                <?php echo $second_section_description; ?>
                            </p>
                        <?php endif; ?>

                        <?php if($second_section_button): ?>
                            <a href="<?php echo $second_section_button['url'] ?>" target="<?php echo $second_section_button['target'] ?>" class="btn">
                                <span>
                                    <?php echo $second_section_button['title'] ?>
                                </span>
                            </a>
                        <?php endif; ?>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="third_section color_change">

        <!-- <div class="image_holder_top vscroll">

            <?php if($third_section_first_image): ?>
                <div class="image_holder fadein_wrap fadeIn">
                    <img src="<?php echo $third_section_first_image['url'] ?>" alt="<?php echo $third_section_first_image['alt'] ?>">
                </div>
            <?php endif; ?>
        </div> -->


        <div class="third_section_content">
            <div class="left">
                <div class="image_holder fadein_wrap fadeIn">
                    <?php if($third_section_second_image_mobile): ?>
                        <img src="<?php echo $third_section_second_image_mobile['url'] ?>" alt="<?php echo $third_section_second_image_mobile['alt'] ?>" class="mobile">
                    <?php endif; ?>
                    
                    <?php if($third_section_second_image): ?>
                        <img src="<?php echo $third_section_second_image['url'] ?>" alt="<?php echo $third_section_second_image['alt'] ?>" class="desktop">
                    <?php endif; ?>
                </div>
            </div>

            <div class="right">
                <div class="right_content">
                    <img class="logo__section" src="<?php echo get_template_directory_uri(); ?>/images/home/logo.svg" alt="logo">
                    <h2 class="letter_wrap"><?php echo $third_section_headline; ?></h2>
                    <p>
                        <?php echo $third_section_description; ?>
                    </p>
                    <a href="<?php echo $third_section_button['url']; ?>" target="<?php echo $third_section_button['target']; ?>" class="btn">
                        <span>
                            <?php echo $third_section_button['title']; ?>
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <div class="image_holder_bottom">
            <?php if($third_section_third_image): ?>
                <div class="image_holder fadein_wrap fadeIn">
                    <img src="<?php echo $third_section_third_image['url'] ?>" alt="<?php echo $third_section_third_image['alt'] ?>">
                    <?php if ($third_section_third_image["caption"]): ?>
                        <figcaption><?php echo $third_section_third_image["caption"] ?></figcaption>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
        
    </div>

    <?php if($third_section_banner): ?>
        <div class="banner home_second_banner">
            <div class="banner_section">
                <p><?php echo $third_section_banner; ?></p>  
            </div>
        </div>
    <?php endif; ?>

    <div class="fourth_section">
        <div class="fourth_section_content">
            <div class="left">
                <?php if($fourth_section_headline): ?>
                    <h2 class="letter_wrap"><?php echo $fourth_section_headline; ?></h2>
                <?php endif; ?>
            </div>

            <div class="right">
                <?php foreach ($fourth_section_services as $singleService): ?>
                    <div class="single_item">
                        <div class="icon">
                            <video class="thevideo" webkit-playsinline="true" playsinline="true" muted="muted">
                                
                                <source src="<?php echo $singleService['video']['url'] ?>#t=0.1" type="video/mp4">
                            </video>
                        </div>
                        <h3>
                            <?php echo $singleService['service_name'] ?>
                        </h3>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <?php if($show_featured_project == 'yes'): $fifth_section_featured_project = get_field('fifth_section_featured_project'); ?>
        
        <?php if( $fifth_section_featured_project ): ?>
            <?php foreach( $fifth_section_featured_project as $post ): 

                setup_postdata($post); ?>
                <div class="fifth_section">
                    <div class="fifth_section_content">
                        <div class="image_holder">
                            <?php the_post_thumbnail(); ?>
                        </div>

                        <p class="left">
                            Featured Project
                        </p>

                        <div class="content">
                            <p>
                                <h2 class="letter_wrap_scroll"><?php the_title(); ?></h2>
                            </p>
                            <a href="<?php the_permalink() ?>" class="btn">
                                <span>
                                    View Project
                                </span>
                            </a>
                        </div>

                        <a href="/portfolio" class="right">
                            View all projects
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
            
            <?php 
            // Reset the global post object so that the rest of the page works correctly.
            wp_reset_postdata(); ?>
        <?php endif; ?>
    <?php endif; ?>

    <div class="sixth_section">
        <div class="sixth_section_content">
            <div class="accordion_headline">
                <?php if($sixth_section_headline): ?>
                    <h2 class="letter_wrap"><?php echo $sixth_section_headline; ?></h2>
                <?php endif; ?>
            </div>
            
            <div class="accordions">
                <?php $i=1; foreach ($sixth_section_testimonials as $singleTestimonial): ?>
                    <div class="single_accordion <?php if($i == 1): ?>active<?php endif; ?>">
                        <div class="accordion_header">
                            <p>
                                <?php echo $singleTestimonial['client_name'] ?>
                            </p>
                        </div>
                        <div class="accordion_content">
                            <div class="content">
                                <?php if($i != 1): ?>
                                    <div class="prev_acordion">
                                        <div class="arrow"></div>
                                        Previous
                                    </div>
                                <?php endif; ?>
                                <div class="next_acordion">
                                    Next
                                    <div class="arrow"></div>
                                </div>
                                <span><?php echo $singleTestimonial['year'] ?></span>
                                <img src="<?php echo $singleTestimonial['photo']['url']?>" alt="<?php echo $singleTestimonial['photo']['alt']?>">
                                <p>
                                    <?php echo $singleTestimonial['description'] ?>
                                </p>
                                <p style="font-size: 16px" >
                                    -<?php echo $singleTestimonial['client_name'] ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    <?php $i++; ?>
                <?php endforeach; ?>
            </div>
        </div>
        
    </div>

    <div class="seventh_section">
        <?php if($seventh_section_image): ?>
            <img src="<?php echo $seventh_section_image['url'] ?>" alt="<?php echo $seventh_section_image['alt'] ?>" class="desktop">
        <?php endif; ?>

        <div class="seventh_section_content">
            <?php if($seventh_section_image): ?>
                <img src="<?php echo $seventh_section_image['url'] ?>" alt="<?php echo $seventh_section_image['alt'] ?>" class="mobile">
            <?php endif; ?>
            
            <?php if($seventh_section_headline_1): ?>
            <h2 class="letter_wrap"><?php echo $seventh_section_headline_1; ?></h2>
            <?php endif; ?>
            <?php if($seventh_section_headline_2): ?>
            <h2 class="letter_wrap"><?php echo $seventh_section_headline_2; ?></h2>
            <?php endif; ?>
            <?php if($seventh_section_button): ?>
            <a class="btn white contact_popup_opener">
                <span>
                    <?php echo $seventh_section_button; ?>
                </span>
            </a>
            <?php endif; ?>
        </div>
        
        <?php get_template_part( 'template-parts/tmplt-footer'); ?>
        
    </div>
    
</div>

<?php
get_footer(); ?>