<?php
/* Template Name: Landing Page */

$section_link = get_field('section_link');
$section_bg_image = get_field('section_bg_image');
$section_image = get_field('section_image');
$section_content = get_field('section_content');

$section_link2 = get_field('section_link2');
$section_bg_image2 = get_field('section_bg_image2');
$section_image2 = get_field('section_image2');
$section_content2 = get_field('section_content2');


get_header(); ?>
<section id="landing-page">

<div class="row">
    <div class="col">
        <div class="content">
            <img class="bg-image" src="<?php echo $section_bg_image['url'] ?>" alt="section bg image">
            <img src="<?php echo $section_image['url'] ?>" alt="section image">
            <div class="inner">
                <p><?php echo $section_content ?></p>
                <a class="btn" href="<?php echo $section_link; ?>"><span>View Site</span></a>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="content">
            <img class="bg-image" src="<?php echo $section_bg_image2['url'] ?>" alt="section bg image">
            <img src="<?php echo $section_image2['url'] ?>" alt="section image">
            <div class="inner">
                <p><?php echo $section_content2 ?></p>
                <a class="btn" href="<?php echo $section_link2; ?>"><span>View Site</span></a>
            </div>
        </div>
    </div>
</div>
</section>
<?php
get_footer(); ?>