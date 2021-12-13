(function ($) {
  //document ready
  $(document).ready(function () {
    if (window.screen.width > 1024) {
      var scroller = "#viewport";
    } else {
      var scroller = "body";
    }

    
  // setTimeout(function(){
  //     Draggable.create(".single_project_wrap .slider .image_slider", {
  //       type: "x",
  //       edgeResistance: 0.5,
  //       snap: (val) => Math.round(val / 100) * 100,
  //       inertia: true,
  //       allowContextMenu : true,	
  //       onThrowComplete	: function() { console.log(this.x) },
  //       bounds: {
  //         minX: -document.querySelector(".single_project_wrap .image_slider").offsetWidth + document.querySelector(".single_project_wrap .slider").offsetWidth,
  //         maxX: 0
  //       }
  //     });
  // }, 1000)
    /*	-----------------------------------------------------------------------------
    CONTACT OPENER START
    --------------------------------------------------------------------------------- */
    var contactOpener = gsap.timeline({
      paused: true,
      reversed: true,
      onComplete: function () {
        console.log("complete");
      },
    });

    let contact_holder = $(".contact_popup_holder");
    let contact_content_holder = $(".contact_popup");
    let contact_content = $(".contact_popup .content, .close_contact_popup");

    contactOpener.to(contact_holder, {
      visibility: "visible",
      opacity: 1,
      duration: 0.7,
      ease: "power2.inOut",
    });
    contactOpener.to(contact_content_holder, { width: "50%" });
    contactOpener.to(contact_content, { opacity: 1 });
    // contactOpener.from(
    //     $(".contact_popup .form_headline .char"),
    //     { y: 500, duration: 1, stagger: 0.08, ease: Power1.easeOuteaseOut }, "<"
    //   )

    $("#work").on("wpcf7mailsent.#work", function (e) {
      $(".success_message_wrap").fadeIn();
      $(".contact_popup_holder").addClass("green");

      var test = $(this).find(".first_name input").val();

      $(".success_message_wrap .success_message h2 span").text(test);
    });

    $("#meeting").on("wpcf7mailsent.#work", function (e) {
      $(".success_message_wrap").fadeIn();
      $(".contact_popup_holder").addClass("green");
      var test = $(this).find(".first_name input").val();

      $(".success_message_wrap .success_message h2 span").text(test);
    });

    $(".single_form").on("click", function () {
      $(".single_form").removeClass("active");
      $(this).addClass("active");
      var currentForm = $(this).data("formid");

      $(".form_holder form").removeClass("active");

      $("form").each(function () {
        if ($(this).attr("id") == currentForm) {
          $(this).addClass("active");
        }
      });
    });

    $(".contact_popup_opener").on("click", function () {
      contactOpener.play();
    });

    $(".close_contact_popup, .close_contact_popup_btn").on(
      "click",
      function () {
        $(".success_message_wrap").fadeOut("fast");
        contactOpener.reverse();
        $(".contact_popup_holder").removeClass("green");
      }
    );
    /*	-----------------------------------------------------------------------------
      CONTACT OPENER END
    --------------------------------------------------------------------------------- */

    $(".nav_opener").on("click", function () {
      $(this).fadeOut();
      $(".mobile_nav").fadeIn();
      $(".close_nav").fadeIn().css("display", "flex");
      $("header").css("position", "fixed");
    });

    $(".close_nav").on("click", function () {
      $(this).fadeOut();
      $("header").css("position", "absolute");
      $(".nav_opener").fadeIn();
      $(".close_nav").fadeOut();
      $(".mobile_nav").fadeOut();
    });
    document.body.classList.remove("loading");

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
        scroller: scroller,
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
        scroller: scroller,
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
          scroller: scroller,

          onEnter: function () {
            $(trigger).addClass("in_view");
          },
        },
      });
    });

    var letterAnaimation;

    if ($(window).width() > 765) {
      letterAnaimation = -10;
      console.log("vece");
    } else {
      letterAnaimation = 0;
      console.log("manje");
    }

    gsap.utils.toArray(".letter_wrap").forEach((section) => {
      if (section.parentElement.className == "seventh_section_content") {
        if ($(window).width() > 765) {
          letterAnaimation = -30;
        } else {
          letterAnaimation = 0;
        }
      }

      gsap.from(section.querySelectorAll("div.char"), {
        scrollTrigger: {
          trigger: section,
          scroller: scroller,
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
    heroAnimation.from(heroHeadline, {
      y: 500,
      duration: 0.5,
      stagger: 0.01,
      ease: Power1.easeOuteaseOut,
    });
    heroAnimation.to(heroHeadline, { opacity: 1 });
    heroAnimation.to(heroCtaButton, { opacity: 1, duration: 0.5 });
    heroAnimation.to(headerAnimation, { opacity: 1, duration: 0.5 }, "<");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: $(".home_hero"),
          start: "top top",
          scrub: true,
          scroller: scroller,
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
    //   scroller: scroller,

    //   onEnter: () => $(".footer_content").addClass("active"),
    // });

    gsap.to("footer", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 50%",
        scroller: scroller,
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
            scroller: scroller,
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
          scroller: scroller,
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
          scroller: scroller,
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
      ".home_wrap .fifth_section_content .image_holder, .home_wrap .fifth_section_content .image_holder img"
    );
    let textColor = $(".fifth_section_content p");
    let headlineReveal = $(
      ".home_wrap .fifth_section_content .content .btn, .home_wrap .fifth_section_content p"
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".home_wrap .fifth_section",
          scrub: true,
          pin: true,
          pinSpacing: true,
          end: "+=100%",
          scroller: scroller,
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

      // gsap.to(marquee, {
      //   duration: 15,
      //   ease: "none",
      //   x: "-=" + w,
      //   modifiers: {
      //     x: gsap.utils.unitize((x) => parseFloat(x) % w),
      //   },
      //   repeat: -1,
      // });
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

      // gsap.to(marquee, {
      //   duration: 15,
      //   ease: "none",
      //   x: "-=" + w,
      //   modifiers: {
      //     x: gsap.utils.unitize((x) => parseFloat(x) % w),
      //   },
      //   repeat: -1,
      // });
    });

    /*	-----------------------------------------------------------------------------
        End of Home Second Banner
        --------------------------------------------------------------------------------- */

    ScrollTrigger.refresh();
  });
})(jQuery);
