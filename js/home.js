(function ($) {
  //document ready
  $(document).ready(function () {
    document.body.classList.remove("loading");

    // var figure = $(".icon").hover(hoverVideo, hideVideo);

    // function hoverVideo(e) {
    //   $("video", this).get(0).play();
    // }

    // function hideVideo(e) {
    //   $("video", this).get(0).pause();
    // }

    var rows = document.querySelectorAll(".fourth_section .single_item");

    rows.forEach((row) => {
      row.addEventListener("mouseenter", function () {
        if (
          this.classList.contains("animate") &&
          !this.classList.contains("init")
        ) {
          this.querySelector("video").play();
          this.classList.add("init");
        }
      });
    });

    /*-----------------------------------------------------------------------------
        Parallax Animation
        --------------------------------------------------------------------------------- */
    gsap.to(".vscroll", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".third_section",
        // start: "top 100%",
        // end: "bottom 50%",
        scrub: true,
        scroller: "#viewport",
      },
    });

    gsap.to(".vscroll__up", {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: ".first_section",
        start: "top bottom",
        // end: "bottom 50%",
        scrub: true,
        scroller: "#viewport",
      },
    });

    /*-----------------------------------------------------------------------------
        Fade Parallax Animation
        --------------------------------------------------------------------------------- */

    /*-----------------------------------------------------------------------------
        Fade Image/Text Animation
        --------------------------------------------------------------------------------- */
    let animationTrigger = $(".fadein_wrap");

    animationTrigger.each(function () {
      let trigger = $(this);

      gsap.to(animationTrigger, {
        scrollTrigger: {
          trigger: trigger,
          start: "top 60%",
          scroller: "#viewport",

          onEnter: function () {
            $(trigger).addClass("in_view");
          },
        },
      });
    });

    var letterAnaimation = -10;
    gsap.utils.toArray(".letter_wrap").forEach((section) => {
      if (section.parentElement.className == "seventh_section_content") {
        letterAnaimation = -30;
      }

      gsap.from(section.querySelectorAll("div.char"), {
        scrollTrigger: {
          trigger: section,
          scroller: "#viewport",
        },

        y: 500,
        opacity: 0,
        duration: 0.5,
        stagger: 0.007,
        ease: "Power1.easeOut",
      });
    });

    /*-----------------------------------------------------------------------------
        End Of Fade Image/Text Animation
        --------------------------------------------------------------------------------- */

    /*-----------------------------------------------------------------------------
        Home Hero Animation
        --------------------------------------------------------------------------------- */
    var heroAnimation = gsap.timeline({
      onComplete: function () {
        // console.log("complete");
      },
    });

    let heroHeadline = $(".home_hero h1 .char");
    let heroImg = $(".home_hero img");
    let heroCtaButton = $(".home_hero .cta_button");
    let headerAnimation = $("header");
    heroAnimation.to(heroImg, { opacity: 1, duration: 0.5 });
    heroAnimation.from(heroHeadline,{ y: 500, duration: 1, stagger: 0.08, ease: Power1.easeOuteaseOut });
    heroAnimation.to(heroHeadline, { opacity: 1 });
    heroAnimation.to(heroCtaButton, { opacity: 1, duration: 0.5 });
    heroAnimation.to(headerAnimation, { opacity: 1, duration: 0.5 }, "<");
    

    gsap
      .timeline({
        scrollTrigger: {
          trigger: $(".home_hero"),
          start: "top top",
          scrub: true,
          scroller: "#viewport",
        },
      })
      .to($(".home_hero .cta_button, .home_hero h1"), {
        yPercent: -20,
        ease: "none",
      });

    /*-----------------------------------------------------------------------------
        End of Home Hero Animation
        --------------------------------------------------------------------------------- */

    /*-----------------------------------------------------------------------------
        Footer Slide Up
        --------------------------------------------------------------------------------- */
    // ScrollTrigger.create({
    //   trigger: "footer",
    //   start: "top 50%",
    //   scrub: true,
    //   scroller: "#viewport",

    //   onEnter: () => $(".footer_content").addClass("active"),
    // });

    gsap.to("footer", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 50%",
        scroller: "#viewport",
        onEnter: () => $(".footer_content").addClass("active"),
      },
    });

    /*-----------------------------------------------------------------------------
        End of Footer Slide Up
        --------------------------------------------------------------------------------- */

    /*-----------------------------------------------------------------------------
        Accordions Logic
        --------------------------------------------------------------------------------- */
    $(".single_accordion").on("click", function () {
      $(".single_accordion").removeClass("active");
      $(this).addClass("active");
    });

    gsap.to("single_accordion", {
        scrollTrigger: {
          trigger: ".accordions",
          start: "top top",
          scroller: "#viewport",
          onEnter: () => setTimeout(function(){$(".single_accordion").first().addClass("active")}, 2000),
        },
      });

    let singleAccordionsAnimationTrigger = $(".accordions, .page-template-template-about .third_section_content");
    let singleAccordion = $(".single_accordion");
    singleAccordion.each(function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: singleAccordionsAnimationTrigger,
            start: "top top",
            scroller: "#viewport",
          },
        })
        .set(
          singleAccordion,
          {
            className: "single_accordion animate",
            stagger: 0.2,
            ease: "power2.inOut",
          },
          "+=1"
        );
    });

    $(".next_acordion").on("click", function (e) {
      $(this).parent().parent().parent().removeClass("active");
      $(this).parent().parent().parent().next().addClass("active");
      e.stopImmediatePropagation();
    });

    $(".prev_acordion").on("click", function (e) {
      $(this).parent().parent().parent().removeClass("active");
      $(this).parent().parent().parent().prev().addClass("active");
      e.stopImmediatePropagation();
    });

    /*	-----------------------------------------------------------------------------
        End of Accordions logic
        --------------------------------------------------------------------------------- */

    /*-----------------------------------------------------------------------------
        Services Animation
        --------------------------------------------------------------------------------- */
    let servicesAnimationTrigger = $(".fourth_section_content");
    let singleService = $(".single_item");
    singleService.each(function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: servicesAnimationTrigger,
            start: "top bottom",
            scroller: "#viewport",
          },
        })
        .set(
          singleService,
          {
            className: "single_item animate",
            stagger: 0.2,
            ease: "power2.inOut",
          },
          "+=1"
        );
    });

    /*-----------------------------------------------------------------------------
        End of Services Animation
        --------------------------------------------------------------------------------- */

    /*-----------------------------------------------------------------------------
        Services Animation
        --------------------------------------------------------------------------------- */
    let accordionsAnimationTrigger = $(".accordions");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: accordionsAnimationTrigger,
          start: "top 70%",
          scroller: "#viewport",
        },
      })
      .set(
        accordionsAnimationTrigger,
        { className: "accordions animate", ease: "power2.inOut" },
        "+=1"
      );

    /*-----------------------------------------------------------------------------
        End of Services Animation
        --------------------------------------------------------------------------------- */

    /*-----------------------------------------------------------------------------
        Color Change
        --------------------------------------------------------------------------------- */
    let trigger = $(".home_wrap .third_section");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top 70%",
          scroller: "#viewport",
        },
      })
      .to(trigger, { backgroundColor: "#1C2021" });

    /*-----------------------------------------------------------------------------
        End of Color Change
        --------------------------------------------------------------------------------- */

    /*-----------------------------------------------------------------------------
        Image Reveal
        --------------------------------------------------------------------------------- */
    let image_reveal = $(
      ".fifth_section_content .image_holder, .fifth_section_content .image_holder img"
    );
    let textColor = $(".fifth_section_content p");
    let headlineReveal = $(
      ".fifth_section_content .content .btn, .fifth_section_content p"
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".fifth_section",
          scrub: true,
          pin: true,
          pinSpacing: true,
          end: "+=100%",
          scroller: "#viewport",
        },
      })
      .to(image_reveal, {
        width: "100vw",
        height: "100vh",
        skewX: "0deg",
        ease: "none",
      })
      .to(textColor, { color: "#EDEDED" })
      .from(
        $(".fifth_section_content .content h2 .char"),
        { y: 500, duration: 1, stagger: 0.08, ease: Power1.easeOuteaseOut },
        "<"
      )
      .to(headlineReveal, { opacity: 1 }, "<");

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

    ScrollTrigger.refresh();
  });
})(jQuery);
