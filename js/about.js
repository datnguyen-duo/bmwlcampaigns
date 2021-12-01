(function ($) { //document ready
    
    console.log('about')

    /*	-----------------------------------------------------------------------------
        Home First Banner
        --------------------------------------------------------------------------------- */
        var first_banner = $(".about_first_banner .banner_section");
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
        let imageSlider = $('.image_slider')
        gsap.to(imageSlider, {
            xPercent: -75, 
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".massiveImage",
                start: "top top",
                end: () => innerWidth * 3,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        })
}(jQuery));