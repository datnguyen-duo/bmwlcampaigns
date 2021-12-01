<?php
/* Template Name: Portfolio */
get_header(); ?>

<div class="portfolio_wrap">
    <div class="portfolio_header">
        <h1>Our <br> Work</h1>
        <div class="banner portfolio_first_banner">
            <div class="banner_section">
                <p>The Right Mix Of Experience And Passion</p>                
            </div>
        </div>
        <div class="work_description">
            <h2>A Winning Record</h2>
            <p>
                BMWL represents a broad spectrum of clients, from politicians to political action committees, from corporations to nonprofits and from unions to trade associations.
            </p>
        </div>
    </div>
    <div class="portfolio_paralax_holder">
        <div class="section_parallax">
            <h2>Project 1</h2>
            <div class="image_holder" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/portfolio/portfolio1.png');">
                <!-- <img src="<?php echo get_template_directory_uri(); ?>/images/about/accrodion.png" alt=""> -->
            </div>
        </div>
        <div class="section_parallax">
            <h2>Project 2</h2>
            <div class="image_holder" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/portfolio/portfolio2.png');">
                <!-- <img src="<?php echo get_template_directory_uri(); ?>/images/home/second_section.png" alt=""> -->
            </div>
        </div>
        <div class="section_parallax">
            <h2>Project 3</h2>
            <div class="image_holder" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/portfolio/portfolio3.png');">
                <!-- <img src="<?php echo get_template_directory_uri(); ?>/images/home/second_section.png" alt=""> -->
            </div>
        </div>
        <div class="section_parallax">
            <h2>Project 4</h2>
            <div class="image_holder" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/portfolio/portfolio4.png');">
                <!-- <img src="<?php echo get_template_directory_uri(); ?>/images/home/second_section.png" alt=""> -->
            </div>
        </div>
    </div>
    

    <?php get_template_part( 'template-parts/tmplt-footer'); ?>
</div>

<?php
get_footer(); ?>