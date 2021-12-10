(function ($) { //document ready
    $(document).ready(function () {
        if(window.screen.width > 1024){
            var scroller = '#viewport';
        } else{
            var scroller = 'body';
        }

        gsap
        .timeline({
          scrollTrigger: {
            trigger: ".services_wrap .third_section",
            scrub: 0.3,
            start: "top top",
            end:'+=1000', // try diff options here
            markers: true,
            pin: true
          }
        })
        .to(".services_wrap .accordion_contenet", {
          height: 1000,
          duration: 1, ease: "none",
          stagger: 3 // try diff options here
        })

        let servicesVerticalSlider = $('.services_wrap .image_slider')
        gsap.to(servicesVerticalSlider, {
            yPercent: -80, 
            y: () => window.innerHeight,
            ease: "none",
            scrollTrigger: {
                scroller: scroller,
                trigger: ".service_hero",
                start: "top top",
                end: () => 'bottom top-=' + window.innerHeight,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        })

        /*	-----------------------------------------------------------------------------
        Services First Banner
        --------------------------------------------------------------------------------- */
        var first_banner = $(".services_first_banner .banner_section");
        gsap.to(first_banner, { opacity: 1 });

        first_banner.each(function () {
            let marquee = $(this);
            var marqueeContainer = marquee.parent();
            var w = marquee.width();
            var x = Math.round(marqueeContainer.width() / w) + 5;

            for (var i = 0; i < x; i++) {
                marquee.find("> *:first-of-type").clone().appendTo(marquee);
            }

            // gsap.to(marquee, {
            //     duration: 15,
            //     ease: "none",
            //     x: "-=" + w,
            //     modifiers: {
            //     x: gsap.utils.unitize((x) => parseFloat(x) % w),
            //     },
            //     repeat: -1,
            // });

        });
        /*	-----------------------------------------------------------------------------
        End of Services First Banner
        --------------------------------------------------------------------------------- */
    })
}(jQuery));