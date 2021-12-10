<?php
/* Template Name: Single Project */
get_header(); ?>

<div class="single_project_wrap">
    <div class="project_hero">
        <div class="left">
            <div class="left_content">
                <div class="headline_wrap">
                    <h1 class="letter_wrap">Project Name</h1>
                </div>

                <div class="project_info">
                    <div class="single_info">
                        <span>Category</span>
                        <p>
                            Digital Media
                        </p>
                    </div>
                    <div class="single_info">
                        <span>Client</span>
                        <p>
                            Client Name
                        </p>
                    </div>
                    <div class="single_info">
                        <span>Year</span>
                        <p>
                            Year
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div class="right">
            <img src="<?php echo get_template_directory_uri(); ?>/images/home/featured_project.png" alt="">
        </div>
    </div>

    <div class="first_section">
        <div class="first_section_content">
            <p>About the Project</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec felis et diam feugiat placerat. In interdum nisl a tincidunt pharetra. elementum, dui ut cursus egestas.</h2>
        </div>
    </div>

    <div class="second_section">
        <div class="second_section_content">
            <div class="image_holder">
                <img src="<?php echo get_template_directory_uri(); ?>/images/singleProject/second_section.png" alt="">
            </div>
        </div>
    </div>

    <div class="third_section">
        <div class="third_section_content">
            <div class="left">
                <div class="image_holder_strap">
                    <div class="image_holder">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/singleProject/third_section1.png" alt="">
                    </div>
                </div>

                <div class="image_holder_second">
                    <div class="image_holder">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/singleProject/third_section2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="image_holder">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/singleProject/third_section3.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="fourth_section">
        <div class="fourth_section_inner">
            <div class="fourth_section_content">
                <div class="description">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at est facilisis, vulputate elit vitae, dapibus lectus. Sed finibus dui ut elementum dapibus. In sollicitudin tortor eu lacus placerat, non gravida dui hendrerit. Nullam sed dui mattis, ultricies sapien eget, volutpat urna. Phasellus at turpis laoreet leo egestas gravida vel sed ligula. Proin pretium elementum dictum. Nam viverra mi eu nisi rutrum tincidunt. Sed nec nisi quis nisi rhoncus tincidunt nec et enim. Donec in massa dignissim, varius tellus in, finibus arcu. Aenean egestas tristique dui eget efficitur.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="fifth_section">
        <div class="fifth_section_content">
            <div class="fifth_section_header">
                <h2>Media & <br> mail samples</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur e elefend. Vestibulum semper ultrices nisi, a eleifend turpis, lorem ipsum dolor. Lorem ipsum dolor sit amet, consectetur e elefend. Vestibulum semper ultrices nisi, a eleifend turpis, lorem ipsum dolor.
                </p>
            </div>
            
            <div class="image_slider">
                <div class="image_holder">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/about/slider1.png" alt="">
                </div>
                <div class="image_holder">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/about/slider3.png" alt="">
                </div>
                <div class="image_holder">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/about/slider2.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="sixth_section">
        <div class="sixth_section_content">
            <div class="prev project_nav">
                <h3>Project Name</h3>
                <div class="image_holder">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/singleProject/third_section2.png" alt="">
                </div>
                <div class="prev_project">
                <div class="arrow"></div>
                    Previous project
                    
                </div>
            </div>

            <div class="mid_info">
                <h2>More work</h2>
                <p>
                    Or interested in working together?
                </p>
                <a href="">Reach out.</a>
            </div>

            <div class="next project_nav">
                <h3>Project Name</h3>
                <div class="image_holder">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/singleProject/third_section2.png" alt="">
                </div>
                <div class="next_project">
                    Next project
                    <div class="arrow"></div>
                </div>
            </div>
        </div>

        <?php get_template_part( 'template-parts/tmplt-footer'); ?>
    </div>
</div>

<?php
get_footer(); ?>