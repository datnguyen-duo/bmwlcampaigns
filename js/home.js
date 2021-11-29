(function ($) { //document ready
    $( document ).ready(function() {

        /*-----------------------------------------------------------------------------
        Footer Slide Up
        --------------------------------------------------------------------------------- */
        ScrollTrigger.create({
            trigger: "footer",
            start: 'top -50%',
            scrub: true,
            onEnter: () => $(".footer_content").addClass('active')
        });

        /*-----------------------------------------------------------------------------
        End of Footer Slide Up
        --------------------------------------------------------------------------------- */

        /*-----------------------------------------------------------------------------
        Accordions Logic
        --------------------------------------------------------------------------------- */
        $('.single_accordion').on('click', function(){
            $('.single_accordion').removeClass('active');
            $(this).addClass('active');
        })

        $('.next_acordion').on('click', function(e){
            $(this).parent().parent().parent().removeClass('active');
            $(this).parent().parent().parent().next().addClass('active');
            e.stopImmediatePropagation();
        })

        $('.prev_acordion').on('click', function(e){
            $(this).parent().parent().parent().removeClass('active');
            $(this).parent().parent().parent().prev().addClass('active');
            e.stopImmediatePropagation();
        })

         /*	-----------------------------------------------------------------------------
        End of Accordions logic
        --------------------------------------------------------------------------------- */


        /*-----------------------------------------------------------------------------
        Color Change
        --------------------------------------------------------------------------------- */
        let trigger = $('.third_section');

        gsap.timeline({
            scrollTrigger: {
            trigger: trigger,
            start: "top 70%",
            
            }
        }).to(trigger, {backgroundColor: '#1C2021'})

        /*-----------------------------------------------------------------------------
        End of Color Change
        --------------------------------------------------------------------------------- */


        /*-----------------------------------------------------------------------------
        Image Reveal
        --------------------------------------------------------------------------------- */
        let image_reveal = $(".fifth_section_content .image_holder, .fifth_section_content .image_holder img");
        let textColor = $(".fifth_section_content p");
        let headlineReveal = $(".fifth_section_content .content h2");

        gsap.timeline({
            scrollTrigger: {
            trigger: ".fifth_section",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
            }
        }).to(image_reveal, { width: '100vw', height: '100vh', skewX: '0deg', ease: "none"}).to(textColor, {color: "#EDEDED"}).to(headlineReveal, {opacity: 1, scaleX:1, scaleY:1}, '<');

        /*-----------------------------------------------------------------------------
        End of Image Reveal
        --------------------------------------------------------------------------------- */

        /*	-----------------------------------------------------------------------------
        Home First Banner
        --------------------------------------------------------------------------------- */
        var first_banner = $(".home_first_banner .banner_section");
        gsap.to(first_banner, { opacity: 1 });

        first_banner.each(function () {
            let marquee = $(this);
            var marqueeContainer = marquee.parent();
            var w = marquee.width();
            var x = Math.round(marqueeContainer.width() / w) + 5;

            for (var i = 0; i < x; i++) {
                marquee.find("> *:first-of-type").clone().appendTo(marquee);
            }

            gsap.to(marquee, {
                duration: 15,
                ease: "none",
                x: "-=" + w,
                modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % w),
                },
                repeat: -1,
            });

        });
        /*	-----------------------------------------------------------------------------
        End of Home First Banner
        --------------------------------------------------------------------------------- */

        /*	-----------------------------------------------------------------------------
        Home Second Banner
        --------------------------------------------------------------------------------- */
        var second_banner = $(".home_second_banner .banner_section");
        gsap.to(second_banner, { opacity: 1 });

        second_banner.each(function () {
            let marquee = $(this);
            var marqueeContainer = marquee.parent();
            var w = marquee.width();
            var x = Math.round(marqueeContainer.width() / w) + 5;

            for (var i = 0; i < x; i++) {
                marquee.find("> *:first-of-type").clone().appendTo(marquee);
            }

            gsap.to(marquee, {
                duration: 15,
                ease: "none",
                x: "-=" + w,
                modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % w),
                },
                repeat: -1,
            });

        });

        /*	-----------------------------------------------------------------------------
        End of Home Second Banner
        --------------------------------------------------------------------------------- */
    });
}(jQuery));