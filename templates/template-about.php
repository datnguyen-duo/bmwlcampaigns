<?php
/* Template Name: About */

$first_section_image = get_field('first_section_image');
$first_section_headline = get_field('first_section_headline');
$first_section_description = get_field('first_section_description');
$first_section_button = get_field('first_section_button');

$second_section_headline = get_field('second_section_headline');
$second_section_description = get_field('second_section_description');
$second_section_gallery = get_field('second_section_gallery');

$third_section_first_headline = get_field('third_section_first_headline');
$third_section_second_headline = get_field('third_section_second_headline');
$third_section_banner_text = get_field('third_section_banner_text');
$third_section_core_values = get_field('third_section_core_values');

$fourth_section_headline = get_field('fourth_section_headline');
$fourth_section_team = get_field('fourth_section_team');
$fourth_section_call_to_action_headline = get_field('fourth_section_call_to_action_headline');
$fourth_section_call_to_action_description = get_field('fourth_section_call_to_action_description');
$fourth_section_call_to_action_text = get_field('fourth_section_call_to_action_text');

get_header(); ?>

<div class="about_wrap">
    <div class="first_section">
        <?php if($first_section_headline): ?>
            <h2 class="letter_wrap desktop">
                <?php echo $first_section_headline; ?>
            </h2>
        <?php endif; ?>
        <div class="first_section_content">
            <div class="left">
                <?php if($first_section_image): ?>
                    <div class="image_holder fadein_wrap fadeIn">
                        <img src="<?php echo $first_section_image['url'] ?>" alt="<?php echo $first_section_image['alt'] ?>">
                    </div>
                <?php endif; ?>
            </div>
            <div class="right">


                <div class="content">
                <img class="logo__section" src="<?php echo get_template_directory_uri(); ?>/images/logo_dark.svg" alt="logo">

                    <?php if($first_section_description): ?>
                        <p>
                            <?php echo $first_section_description; ?>
                        </p>
                    <?php endif; ?>
                    
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
    </div>

    <div class="second_section">
        <div class="second_section_content">
            <div class="headline_holder">
                <img class="logo__section" src="<?php echo get_template_directory_uri(); ?>/images/logo_dark.svg" alt="logo">
                <?php if($second_section_headline): ?>
                    <h2 class="letter_wrap">
                        <?php echo $second_section_headline; ?>
                    </h2>
                <?php endif; ?>
            </div>

            <div class="description">
                <?php if($second_section_description): ?>
                    <p>
                        <?php echo $second_section_description; ?>
                    </p>
                <?php endif; ?>
            </div>

            <div class="image_slider">

                <?php foreach ($second_section_gallery as $singleImage): ?>
                    <div class="image_holder">
                        <img src="<?php echo $singleImage['image']['url']; ?>" alt="<?php echo $singleImage['image']['alt']; ?>">
                    </div>
                <?php endforeach; ?>
            </div>
            
        </div>
    </div>

    <div class="third_section">
        <div class="third_section_content">
            
            <div class="headline_holder">
                <img class="logo__section" src="<?php echo get_template_directory_uri(); ?>/images/logo_dark.svg" alt="logo">
                <?php if($third_section_first_headline): ?>
                    <h2 class="letter_wrap"><?php echo $third_section_first_headline; ?> <?php echo $third_section_second_headline; ?></h2>
                <?php endif; ?>
            </div>



            <div class="accordions">
                <?php $i=1; foreach ($third_section_core_values as $coreValue): ?>
                    <div class="single_accordion <?php if($i == 1): ?>active<?php endif; ?>">
                        <div class="accordion_header">
                            <p>
                                <?php echo $coreValue['core_value_name'] ?>
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
                                <?php if ($coreValue['core_value_image']) : ?>
                                    <img src="<?php echo $coreValue['core_value_image']['url'] ?>" alt="<?php echo $coreValue['core_value_image']['alt'] ?>">

                                <?php endif; ?>

                                <?php if ($coreValue['core_value_image']['caption']): ?>
                                    <figcaption><?php echo $coreValue['core_value_image']['caption'] ?></figcaption>
                                <?php endif; ?>

                                <p>
                                    <?php echo $coreValue['core_value_description'] ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    <?php $i++; ?>
                <?php endforeach; ?>
            </div>    

            <?php if($third_section_banner_text): ?>
                <div class="banner about_first_banner">
                    <div class="banner_section">
                        <p><?php echo $third_section_banner_text; ?></p>                
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <div class="fourth_section">
        <div class="fourth_section_content">
            <h2 class="letter_wrap">
                <?php echo $fourth_section_headline; ?>
            </h2>
            <img class="logo__section" src="<?php echo get_template_directory_uri(); ?>/images/home/logo.svg" alt="logo">
            <div class="team_holder">
                <?php 
                    $counter = 1;
                    $len = count($fourth_section_team);
                    
                ?>
                <?php $lastElement = end($fourth_section_team); ?>
                <?php foreach ($fourth_section_team as $singleTeam): ?>
                    <?php if ($len % 2 == 0): ?>
                        <div class="single_team" 
                        data-description="<?php echo $singleTeam['team_member_description'] ?>" 
                        data-name="<?php echo $singleTeam['team_member_name'] ?>" 
                        data-position="<?php echo $singleTeam['team_member_position'] ?>" 
                        data-image="<?php echo $singleTeam['team_member_image']['url']; ?>" 
                        data-contact="<?php echo $singleTeam['team_member_contact']; ?>">
                        
                            <div class="single_team_content">
                                <div class="image_holder fadein_wrap fadeIn">
                                    <img src="<?php echo $singleTeam['team_member_image']['url']; ?>" alt="<?php echo $singleTeam['team_member_image']['alt']; ?>">
                                </div>
    
                                <div class="team_info">
                                    <p><?php echo $singleTeam['team_member_name'] ?></p>
                                    <p><?php echo $singleTeam['team_member_position'] ?></p>
                                </div>
                                <?php if($singleTeam['team_member_social']): ?>
                                    <div class="single_info social">
                                        <span>Follow</span>
                                        <?php foreach ($singleTeam['team_member_social'] as $singleSocial): ?>
                                            <a href="<?php echo $singleSocial['social_network']['url'] ?>" target="_blank"><?php echo $singleSocial['social_network']['title'] ?></a>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>

                        <?php if($counter == $len): ?>
                            <div class="single_team join_us_holder">
                                <div class="join_us">
                                    <h3 class="letter_wrap"><?php echo $fourth_section_call_to_action_headline; ?></h3>
    
                                    <p>
                                    <?php echo $fourth_section_call_to_action_description; ?>
                                    </p>
    
                                    <a class="btn contact_popup_opener">
                                        <span><?php echo $fourth_section_call_to_action_text; ?></span>
                                    </a>
                                </div>
                            </div>
                        <?php endif; ?>
                        <?php $counter++; ?>
                    <?php else: ?>
                        <div class="single_team <?php if($counter == $len): ?>last<?php endif; ?>" 
                        data-description="<?php echo $singleTeam['team_member_description'] ?>" 
                        data-name="<?php echo $singleTeam['team_member_name'] ?>" 
                        data-position="<?php echo $singleTeam['team_member_position'] ?>" 
                        data-image="<?php echo $singleTeam['team_member_image']['url']; ?>" 
                        data-contact="<?php echo $singleTeam['team_member_contact']; ?>"
                        data-social="<?php echo $singleTeam['team_member_social']; ?>">
                        
                            <div class="single_team_content">
                                <div class="image_holder fadein_wrap fadeIn">
                                    <img src="<?php echo $singleTeam['team_member_image']['url']; ?>" alt="<?php echo $singleTeam['team_member_image']['alt']; ?>">
                                </div>
    
                                <div class="team_info">
                                    <p><?php echo $singleTeam['team_member_name'] ?></p>
                                    <p><?php echo $singleTeam['team_member_position'] ?></p>
                                </div>
                                
                                <?php if($singleTeam['team_member_social']): ?>
                                    <div class="single_info social">
                                        <span>Follow</span>
                                        <?php foreach ($singleTeam['team_member_social'] as $singleSocial): ?>
                                            <a href="<?php echo $singleSocial['social_network']['url'] ?>" target="_blank"><?php echo $singleSocial['social_network']['title'] ?></a>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                        <?php if ($counter == $len - 1) { ?>
                            <?php if($len % 2 == 0): ?>
                                
                                <div class="single_team join_us_holder">
                                    <div class="join_us">
                                        <h3 class="letter_wrap"><?php echo $fourth_section_call_to_action_headline; ?></h3>
        
                                        <p>
                                        <?php echo $fourth_section_call_to_action_description; ?>
                                        </p>
        
                                        <a class="btn contact_popup_opener">
                                            <span><?php echo $fourth_section_call_to_action_text; ?></span>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="single_team" 
                                    data-description="<?php echo $singleTeam['team_member_description'] ?>" 
                                    data-name="<?php echo $singleTeam['team_member_name'] ?>" 
                                    data-position="<?php echo $singleTeam['team_member_position'] ?>" 
                                    data-image="<?php echo $singleTeam['team_member_image']['url']; ?>" 
                                    data-contact="<?php echo $singleTeam['team_member_contact']; ?>"
                                    data-social="<?php echo $singleTeam['team_member_social']; ?>">
                                    
                                    <div class="single_team_content">
                                        <div class="image_holder fadein_wrap fadeIn">
                                            <img src="<?php echo $singleTeam['team_member_image']['url']; ?>" alt="<?php echo $singleTeam['team_member_image']['alt']; ?>">
                                        </div>
            
                                        <div class="team_info">
                                            <p><?php echo $singleTeam['team_member_name'] ?></p>
                                            <p><?php echo $singleTeam['team_member_position'] ?></p>
                                        </div>
                                        
                                        <?php if($singleTeam['team_member_social']): ?>
                                            <div class="single_info social">
                                                <span>Follow</span>
                                                <?php foreach ($singleTeam['team_member_social'] as $singleSocial): ?>
                                                    <a href="<?php echo $singleSocial['social_network']['url'] ?>" target="_blank"><?php echo $singleSocial['social_network']['title'] ?></a>
                                                <?php endforeach; ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </div>
        
                            <?php else: ?>
                                
                                <div class="single_team join_us_holder right">
        
                                    <div class="join_us">
                                    <h3 class="letter_wrap"><?php echo $fourth_section_call_to_action_headline; ?></h3>
        
                                        <p>
                                        <?php echo $fourth_section_call_to_action_description; ?>
                                        </p>
        
                                        <a class="btn contact_popup_opener">
                                        <span><?php echo $fourth_section_call_to_action_text; ?></span>
                                        </a>
                                    </div>
                                </div>
        
                            <?php endif; ?>
                            
                        <?php } $counter++; ?>

                    <?php endif; ?>
                <?php endforeach; ?>
                

            </div>
        </div>

        <?php get_template_part( 'template-parts/tmplt-footer'); ?>
        
    </div>
</div>

<?php
get_footer(); ?>