(function ($) { //document ready
    $(document).ready(function () {
        if(window.screen.width > 1024){
            var scroller = '#viewport';
        } else{
            var scroller = 'body';
        }

        let servicesVerticalSlider = $('.services_wrap .image_slider')
        gsap.to(servicesVerticalSlider, {
            yPercent: -80, 
            y: () => window.innerHeight,
            ease: "none",
            scrollTrigger: {
                scroller: scroller,
                trigger: ".service_hero",
                start: "top top",
                markers: true,
                end: () => 'bottom top-=' + window.innerHeight,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        })
    })
}(jQuery));