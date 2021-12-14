(function ($) {
  //document ready
  $(document).ready(function () {
    if (window.screen.width > 1024) {
      var scroller = "#viewport";
    } else {
      var scroller = "body";
    }

    var winHeight = document.body.clientHeight;
    var services = document.querySelectorAll(".single_accordion");
    var h = 0;
    var l = document.querySelectorAll(".single_accordion").length; // get number of services

    for (var i = 0; i < l; i++) {
      h += services[i].scrollHeight; // get height of all services container
    }

    var servicesPinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".third_section",
        invalidateOnRefresh: true,
        pin: true,
        pinSpacing: true,
        scrub: true,
        end: () => "+=" + h * 1.5,
        scroller: scroller,
        start: "top top",
        markers: true,
      },
    });

    gsap.utils.toArray(services).forEach((service, index) => {
      var y = 0;

      if (index == 0) {
        y = winHeight - service.scrollHeight;
      } else {
        y = service.scrollHeight;
      }

      servicesPinTl.to(service, { y: -y });
    });

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

    ScrollTrigger.refresh();
  });
})(jQuery);
