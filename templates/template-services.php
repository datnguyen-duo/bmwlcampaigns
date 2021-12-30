<?php
/* Template Name: Services */

$hero_section_headline = get_field('hero_section_headline');
$hero_section_images = get_field('hero_section_images');

$first_section_headline = get_field('first_section_headline');
$first_section_description = get_field('first_section_description');
$first_section_button = get_field('first_section_button');
$first_section_first_image = get_field('first_section_first_image');
$first_section_first_text = get_field('first_section_first_text');
$first_section_second_image = get_field('first_section_second_image');
$first_section_second_text = get_field('first_section_second_text');

$services_section_banner_text = get_field('services_section_banner_text');
$services = get_field('services');

get_header(); ?>

<div class="services_wrap">
    <div class="service_hero" id="top">
        <?php if($hero_section_headline): ?>
            <h1 class="letter_wrap"><?php echo $hero_section_headline; ?></h1>
        <?php endif; ?>

        <?php if($hero_section_images): ?>
            <div class="image_slider">
                <?php foreach ($hero_section_images as $singleImage): ?>
                    <div class="image_holder">
                        <img src="<?php echo $singleImage['image']['url'] ?>" alt="<?php echo $singleImage['image']['alt'] ?>">
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>

    <div class="second_section">
        <div class="second_section_content">
            
            <h2 class="section_headline mobile"><?php echo $first_section_first_text; ?> <?php echo $first_section_second_text; ?></h2>
            <div class="left">
                <?php if($first_section_first_image): ?>
                    <div class="image_holder">
                        <img src="<?php echo $first_section_first_image['url'] ?>" alt="<?php echo $first_section_first_image['alt'] ?>">
                    </div>
                <?php endif; ?>

                <?php if($first_section_first_text): ?>    
                    <h2 class="letter_wrap"><?php echo $first_section_first_text; ?></h2>
                <?php endif; ?>
                
            </div>

            <div class="middle_info">
                <?php if($first_section_headline): ?>
                    <p>
                        <?php echo $first_section_headline; ?>
                    </p>
                <?php endif; ?>
            </div>

            <div class="right">
                <?php if($first_section_second_image): ?>
                    <div class="image_holder">
                        <img src="<?php echo $first_section_second_image['url'] ?>" alt="<?php echo $first_section_second_image['alt'] ?>">
                    </div>
                <?php endif; ?>
                <?php if($first_section_second_text): ?>    
                    <h2 class="letter_wrap"><?php echo $first_section_second_text; ?></h2>
                <?php endif; ?>
            </div>
        </div>
        <div class="description">
        
            <?php if($first_section_description): ?>
                <p>
                    <?php echo $first_section_description; ?>
                </p>
            <?php endif; ?>

            <div class="btn_holder">
                <?php if($first_section_button): ?>
                    <a href="<?php echo $first_section_button['url'] ?>" target="<?php echo $first_section_button['target'] ?>" class="btn">
                        <span>
                            <?php echo $first_section_button['title'] ?>
                        </span>
                    </a>
                <?php endif; ?>
            </div>
            
        </div>
    </div>
    <?php if($services_section_banner_text): ?>
        <div class="banner services_first_banner">
            <div class="banner_section">
                <p><?php echo $services_section_banner_text; ?></p>
            </div>
        </div>
    <?php endif; ?>

    <div class="third_section">
        <div class="third_section_conetnt">
            <div class="service_accordions">
                <?php $servicesCounter = 1; foreach ($services as $singleService): ?>
                    <div class="single_accordion" role="region">
                        <div class="accordion_headline">
                            <div class="counter">0<?php echo $servicesCounter; ?></div>
                            <?php if($servicesCounter == 1): ?>
                                <a href="#top" class="back_to_top">Back to Top</a>
                            <?php endif; ?>
                            <p>
                                <?php echo $singleService['service_main_headline'] ?>
                            </p>
                        </div>
                        <div class="accordion_contenet">
                            <div class="content_header">
                                <video class="thevideo" loop autoplay playsinline="true" muted="muted">
                                    
                                    <source src="<?php echo $singleService['service_video']['url'] ?>#t=0.1" type="video/mp4">
                                </video>
        
                                <h2><?php echo $singleService['service_main_headline'] ?></h2>

                                <div class="big_description">
                                    <?php echo $singleService['service_main_description'] ?>
                                </div>
                                <div class="blurb_content">
                                    <div class="blurb_section">
                                        <div class="single_blurb">
                                            <h3><?php echo $singleService['service_blurb_headline_1'] ?></h3>
                                            <p>
                                                <?php echo $singleService['service_blurb_1'] ?>
                                            </p>
                                        </div>
                                        <div class="single_blurb">
                                            <h3><?php echo $singleService['service_blurb_headline_2'] ?></h3>
                                            <p>
                                            <?php echo $singleService['service_blurb_2'] ?>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="blurb_description">
                                        <h3>
                                            <?php echo $singleService['service_blubs_headline'] ?>
                                        </h3>
                                    </div>
                                    <div class="blurb_section">
                                        <div class="single_blurb">
                                            <h3><?php echo $singleService['service_blurb_headline_3'] ?></h3>
                                            <p>
                                                <?php echo $singleService['service_blurb_3'] ?>
                                            </p>
                                        </div>
                                        <div class="single_blurb">
                                            <h3><?php echo $singleService['service_blurb_headline_4'] ?></h3>
                                            <p>
                                                <?php echo $singleService['service_blurb_4'] ?>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="image_text_section">
                                    <div class="left">
                                        <div class="featured">Featured Project</div>
                                        <div class="image_holder fadein_wrap fadeIn">
                                            <img src="<?php echo $singleService['featured_project_image']['url']; ?>" alt="<?php echo $singleService['featured_project_image']['alt']; ?>">
                                        </div>
                                        <div class="project_name"><?php echo $singleService['featured_project_name'] ?></div>
                                    </div>

                                    <div class="right">
                                        <div class="right_content">
                                            <h3>
                                                <?php echo $singleService['featured_project_headline'] ?>
                                            </h3>
                                            <p>
                                                <?php echo $singleService['featured_project_description'] ?>
                                            </p>
                                            <a href="<?php echo $singleService['featured_project_link']['url']; ?>" target="<?php echo $singleService['featured_project_link']['url']; ?>" class="btn">
                                                <span>
                                                    <?php echo $singleService['featured_project_link']['title']; ?>
                                                </span>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php $servicesCounter++; endforeach; ?>
            </div>
        </div>
    </div>

    <?php get_template_part( 'template-parts/tmplt-footer'); ?>
</div>

<?php
get_footer(); ?>