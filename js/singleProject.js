(function ($) { //document ready
    $(document).ready(function () {
        
        if(window.screen.width > 1024){
            var scroller = '#viewport';
        } else{
            var scroller = 'body';
        }

        /*-----------------------------------------------------------------------------
        Image Reveal
        --------------------------------------------------------------------------------- */
        let singleProject_image_reveal = $(
            ".single_project_wrap .second_section .image_holder"
        );
  
        gsap
        .timeline({
          scrollTrigger: {
            trigger: ".single_project_wrap .second_section",
            scrub: true,
            pin: true,
            markers: true,
            pinSpacing: true,
            end: "+=100%",
            scroller: scroller,
          },
        })
        .to(singleProject_image_reveal, {
          width: "100vw",
          height: "100vh",
          ease: "none",
        })
  
        /*-----------------------------------------------------------------------------
          End of Image Reveal
        --------------------------------------------------------------------------------- */

        // let imageSingleProjectSlider = $('.single_project_wrap .image_slider')
        // gsap.to(imageSingleProjectSlider, {
        //     xPercent: -75, 
        //     x: () => innerWidth,
        //     ease: "none",
        //     scrollTrigger: {
        //         scroller: scroller,
        //         trigger: ".test",
        //         start: "top top",
        //         end: () => innerWidth * 3,
        //         scrub: true,
        //         pin: true,
        //         invalidateOnRefresh: true,
        //         anticipatePin: 1
        //     }
        // })
        
    })
}(jQuery));