<?php 
    $copyright = get_field('copyright', 'option');
    $email = get_field('email', 'option');
    $phone = get_field('phone', 'option');
    $address = get_field('address', 'option');
    $social_networks = get_field('social_networks', 'option');
?>
<footer>
    <div class="footer_content">
        <div class="top_section">
            <div class="left">
                <span>Sign Up For Email Updates</span>
                    <?php echo do_shortcode('[contact-form-7 id="243" title="Footer Form"]'); ?>
                    
                </div>

                <?php if($social_networks): ?>
                    <div class="social_wrap">
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
            <div class="right">
                <div class="right_content">
                    <?php if($address): ?>
                        <div class="single_item">
                            <span>Find Us</span>
                            <p>
                                <?php echo $address; ?>
                            </p>
                        </div>
                    <?php endif; ?>
                    <?php if($phone): ?>
                        <div class="single_item">
                            <span>Call Us</span>
                            <a href="tel:<?php echo $phone; ?>">
                                <?php echo $phone; ?>
                            </a>
                        </div>
                    <?php endif; ?>
                    <?php if($email): ?>
                        <div class="single_item">
                            <span>Email Us</span>
                            <a href="mailto:<?php echo $email; ?>">
                                <?php echo $email; ?>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="bottom_section">
            <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'menu-2',
                        'menu_id'        => 'footer_menu',
                        'container' => false,
                    )
                );
            ?>
            <?php if($copyright): ?>
            <div class="copyright">
                <?php echo $copyright; ?>
            </div>
            <?php endif; ?>
        </div>
    </div>
</footer>