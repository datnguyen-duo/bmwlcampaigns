(function ($) { //document ready
    if(window.screen.width > 1024){
        var scroller = '#viewport';
    } else{
        var scroller = 'body';
    }

    /*	-----------------------------------------------------------------------------
    Headline Movement
    --------------------------------------------------------------------------------- */
    var positionTop = 50;
    $(".section_parallax .project_info").each(function(index) { 
        console.log(index);
        $(this).css({ top: positionTop + '%' });

        positionTop -= 100;
    });

    gsap.utils.toArray(".section_parallax .project_info").forEach((section, i) => {

        const heightDiff = section.parentElement.parentElement.clientHeight;
        
        gsap.to(section, {
            y: heightDiff,
            scrollTrigger: {
                trigger: '.portfolio_paralax_holder',
                start: 'top top',
                scrub: true,
                scroller: scroller
            },
            y: () => heightDiff,
            ease: "none"
        })
    });

    /*	-----------------------------------------------------------------------------
    End of Headline Movement
    --------------------------------------------------------------------------------- */

    /*	-----------------------------------------------------------------------------
    portfolio First Banner
    --------------------------------------------------------------------------------- */
    var first_banner = $(".portfolio_first_banner .banner_section");
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
    End of portfolio First Banner
    --------------------------------------------------------------------------------- */

    /*	-----------------------------------------------------------------------------
    Images Paralax
    --------------------------------------------------------------------------------- */
    gsap.utils.toArray(".section_parallax .image_holder").forEach((section, i) => {
        
        const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

        gsap.fromTo(section,{ 
            y: -heightDiff
            }, {
            scrollTrigger: {
                trigger: section.parentElement,
                scrub: true,
                scroller: scroller,
            },
            y: 0,
            ease: "none"
        });
    });
    /*	-----------------------------------------------------------------------------
    End of Images Paralax
    --------------------------------------------------------------------------------- */
}(jQuery));