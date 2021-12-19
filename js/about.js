(function ($) {
  //document ready
  console.log("load about");

  function loadAboutScripts() {
    console.log("load about");
    if (window.screen.width > 1024) {
      var scroller = "#viewport";
    } else {
      var scroller = "body";
    }

    /*	-----------------------------------------------------------------------------
        TEAM OPENER START
        --------------------------------------------------------------------------------- */
    var teamOpener = gsap.timeline({
      paused: true,
      reversed: true,
      onComplete: function () {
        console.log("complete");
      },
    });

    if (window.screen.width > 750) {
      var teamPopupWidth = "80%";
    } else {
      var teamPopupWidth = "100%";
    }

    let team_holder = $(".single_team_popup");
    let team_content_holder = $(".single_team_popup_content");
    let team_content = $(
      ".single_team_popup_content .content, .close_team_popup"
    );

    teamOpener.to(team_holder, {
      visibility: "visible",
      opacity: 1,
      duration: 0.7,
      ease: "power2.inOut",
    });
    teamOpener.to(team_content_holder, { width: teamPopupWidth });
    teamOpener.to(team_content, { opacity: 1 });
    teamOpener.from(
      $(".team_header h2 .char"),
      { y: 500, duration: 1, stagger: 0.01, ease: Power1.easeOuteaseOut },
      "<"
    );

    $(".single_team")
      .not(".join_us_holder")
      .on("click", function () {
        teamOpener.play();
      });

    $(".close_team_popup").on("click", function () {
      teamOpener.reverse();
    });
    /*	-----------------------------------------------------------------------------
          TEAM OPENER END
          --------------------------------------------------------------------------------- */

    /*	-----------------------------------------------------------------------------
        About First Banner
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
        End of About First Banner
        --------------------------------------------------------------------------------- */
    let imageSlider = $(".about_wrap .image_slider");
    gsap.to(imageSlider, {
      xPercent: -75,
      x: () => innerWidth,
      ease: "none",
      scrollTrigger: {
        scroller: scroller,
        trigger: ".massiveImage",
        start: "top top",
        end: () => innerWidth * 3,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  }
})(jQuery);
