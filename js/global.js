var locoScroll;

(function ($) {
  //document ready

  // LOAD PLUGINS
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(Draggable);

  function globalScripts() {
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

    if (window.screen.width > 1024) {
      var contactFormWidth = "50%";
    } else if (window.screen.width > 768) {
      var contactFormWidth = "70%";
    } else {
      var contactFormWidth = "100%";
    }

    let contact_holder = $(".contact_popup_holder");
    let contact_content_holder = $(".contact_popup");
    let contact_content = $(".contact_popup .content, .close_contact_popup");

    contactOpener.to(contact_holder, {
      visibility: "visible",
      opacity: 1,
      duration: 0.7,
      ease: "power2.inOut",
    });
    contactOpener.to(contact_content_holder, { width: contactFormWidth });
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

    /*	-----------------------------------------------------------------------------
    mobile nav OPENER START
    --------------------------------------------------------------------------------- */
    var menuOpen = gsap.timeline({
      paused: true,
      reversed: true,
      onComplete: function () {},
    });

    let nav_holder = $(".mobile_nav");
    let listItem = $(".mobile_nav .nav_content ul li");
    let mobileNavForm = $(".mobile_nav .form_holder");
    menuOpen.to(nav_holder, {
      visibility: "visible",
      height: "100vh",
      duration: 0.7,
      ease: "power2.inOut",
    });
    menuOpen.to(listItem, { top: 0, opacity: 1, stagger: 0.1 });
    menuOpen.to(mobileNavForm, { opacity: 1 });

    $(".nav_opener").on("click", function () {
      $(this).fadeOut();
      menuOpen.play();
      $(".close_nav").fadeIn().css("display", "flex");
      $("header").css("position", "fixed");
    });

    $(".close_nav").on("click", function () {
      $(this).fadeOut();
      menuOpen.reverse();
      $("header").css("position", "absolute");
      $(".nav_opener").fadeIn();
    });

    $(".mobile_nav .nav_content ul li, .logo_holder").on("click", function () {
      menuOpen.reverse();
      $(".close_nav").fadeOut();
      $("header").css("position", "absolute");

      if ($(window).width() < 650) {
        $(".nav_opener").fadeIn();
      }
    });
    /*	-----------------------------------------------------------------------------
    mobile nav OPENER END
    --------------------------------------------------------------------------------- */
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }

  //LOAD PAGE SCRIPTS
  function loadIndexScripts() {
    var mySplitText = new SplitText($(".letter_wrap, .letter_wrap_scroll"), {
      type: "lines, words, chars",
      wordsClass: "word word++",
      linesClass: "line line++",
      charsClass: "char char++",
    });

    var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
    window.addEventListener("resize", function () {
      // We execute the same script as before
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
    });

    if (window.screen.width > 1024) {
      var scroller = "#viewport";
    } else {
      var scroller = "body";
    }

    var rows = document.querySelectorAll(".fourth_section .single_item");

    rows.forEach((row) => {
      row.addEventListener("mouseenter", function () {
        if (
          this.classList.contains("animate") &&
          !this.classList.contains("init")
        ) {
          this.querySelector("video")
            .play()
            .bind("ended", function () {
              this.currentTime = 0;
            });
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
    } else {
      letterAnaimation = 0;
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
    heroAnimation.to(heroImg, { opacity: 1, duration: 0.5 });
    heroAnimation.from(heroHeadline, {
      y: 500,
      duration: 0.5,
      stagger: 0.01,
      ease: Power1.easeOuteaseOut,
    });
    heroAnimation.to(heroHeadline, { opacity: 1 });
    heroAnimation.to(heroCtaButton, { opacity: 1, duration: 0.5 });

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

    gsap.from(".footer_content", {
      opacity: 0,
      top: "200px",
      scrollTrigger: {
        trigger: "footer",
        start: "top 50%",
        scroller: scroller,
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
    let textColor = $(".fifth_section_content p, .fifth_section_content a");
    let headlineReveal = $(
      ".home_wrap .fifth_section_content .content .btn, .home_wrap .fifth_section_content p, .home_wrap .fifth_section_content a"
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
      var w = document.documentElement.clientWidth;
      var x = Math.round(marqueeContainer.width() / w) + 5;
      var e = document.documentElement.clientHeight * 3;

      for (var i = 0; i < x; i++) {
        marquee.find("> *:first-of-type").clone().appendTo(marquee);
      }

      gsap.to(marquee, {
        x: -w,
        ease: "none",
        scrollTrigger: {
          trigger: marquee,
          invalidateOnRefresh: true,
          scrub: true,
          end: () => "+=" + e,
          scroller: scroller,
        },
      });

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

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }
  function loadAboutScripts() {
    var mySplitText = new SplitText($(".letter_wrap, .letter_wrap_scroll"), {
      type: "lines, words, chars",
      wordsClass: "word word++",
      linesClass: "line line++",
      charsClass: "char char++",
    });

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
      { y: 500, duration: 0.3, stagger: 0.01, ease: Power1.easeOuteaseOut },
      "<"
    );

    $(".single_team")
      .not(".join_us_holder")
      .on("click", function () {
        var teamDescription = $(this).data("description");
        var teamName = $(this).data("name");
        var teamPosition = $(this).data("position");
        var teamImage = $(this).data("image");
        var teamContact = $(this).data("contact");
        $(
          ".single_team_popup .team_description .team_info .single_info.social"
        ).remove();

        $(this)
          .find(".single_info.social")
          .clone()
          .insertAfter(
            ".single_team_popup .team_description .team_info .single_info.contact"
          );

        $(".single_team_popup h2").text(teamName);
        $(".single_team_popup h3").text(teamPosition);
        $(".single_team_popup .team_description .left img").attr(
          "src",
          teamImage
        );
        $(
          ".single_team_popup .team_description .left .team_info .contact a"
        ).text(teamContact);
        $(
          ".single_team_popup .team_description .left .team_info .contact a"
        ).attr("href", "mailto:" + teamContact);
        $(".single_team_popup .team_description .right p").html(
          teamDescription
        );
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
    } else {
      letterAnaimation = 0;
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

    gsap.from(".footer_content", {
      opacity: 0,
      top: "200px",
      scrollTrigger: {
        trigger: "footer",
        start: "top 50%",
        scroller: scroller,
      },
    });
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }
  function loadPortfolioScripts() {
    var mySplitText = new SplitText($(".letter_wrap, .letter_wrap_scroll"), {
      type: "lines, words, chars",
      wordsClass: "word word++",
      linesClass: "line line++",
      charsClass: "char char++",
    });

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
    } else {
      letterAnaimation = 0;
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

    if (window.screen.width > 1024) {
      var scroller = "#viewport";
    } else {
      var scroller = "body";
    }

    /*	-----------------------------------------------------------------------------
  Headline Movement
  --------------------------------------------------------------------------------- */
    var positionTop = 50;
    $(".section_parallax .project_info").each(function (index) {
      console.log(index);
      $(this).css({ top: positionTop + "%" });

      positionTop -= 100;
    });

    gsap.utils
      .toArray(".section_parallax .project_info")
      .forEach((section, i) => {
        const heightDiff = section.parentElement.parentElement.clientHeight;

        gsap.to(section, {
          // y: heightDiff,
          scrollTrigger: {
            trigger: ".portfolio_paralax_holder",
            start: "top top",
            scrub: true,
            scroller: scroller,
          },
          y: () => heightDiff,
          ease: "none",
        });
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
  End of portfolio First Banner
  --------------------------------------------------------------------------------- */

    /*	-----------------------------------------------------------------------------
  Images Paralax
  --------------------------------------------------------------------------------- */
    gsap.utils
      .toArray(".section_parallax .image_holder")
      .forEach((section, i) => {
        const heightDiff =
          section.offsetHeight - section.parentElement.offsetHeight;

        gsap.fromTo(
          section,
          {
            y: -heightDiff,
          },
          {
            scrollTrigger: {
              trigger: section.parentElement,
              scrub: true,
              scroller: scroller,
            },
            y: 0,
            ease: "none",
          }
        );
      });
    /*	-----------------------------------------------------------------------------
  End of Images Paralax
  --------------------------------------------------------------------------------- */

    gsap.from(".footer_content", {
      opacity: 0,
      top: "200px",
      scrollTrigger: {
        trigger: "footer",
        start: "top 50%",
        scroller: scroller,
      },
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }
  function loadServicesScripts() {
    var mySplitText = new SplitText($(".letter_wrap, .letter_wrap_scroll"), {
      type: "lines, words, chars",
      wordsClass: "word word++",
      linesClass: "line line++",
      charsClass: "char char++",
    });
    if (window.screen.width > 1024) {
      var scroller = "#viewport";
    } else {
      var scroller = "body";
    }

    $(".back_to_top").click(function (e) {
      if (window.screen.width > 1024) {
        e.preventDefault();
        let target = e.target.getAttribute("href");

        locoScroll.scrollTo(target);
      } else {
        gsap.to(window, 1, { scrollTo: { y: 0 }, ease: Power2.easeInOut });
      }
    });

    var winHeight = document.body.clientHeight;
    var services = document.querySelectorAll(
      ".services_wrap .single_accordion"
    );
    var h = 0;
    var l = document.querySelectorAll(
      ".services_wrap .single_accordion"
    ).length; // get number of services

    if (window.screen.width > 768) {
      var serviceHeroScroll = 1.3;
    } else {
      var serviceHeroScroll = 1.4;
    }

    for (var i = 0; i < l; i++) {
      h += services[i].scrollHeight; // get height of all services container
    }

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
    } else {
      letterAnaimation = 0;
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".services_wrap .service_hero",
          invalidateOnRefresh: true,
          pin: true,
          pinSpacing: true,
          scrub: true,
          end: "+=250%",
          scroller: scroller,
          start: "top top",
        },
      })
      .to($(".services_wrap .image_slider"), {
        y:
          -$(".services_wrap .image_slider").height() / serviceHeroScroll +
          window.innerHeight,
      });

    var servicesPinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services_wrap .third_section",
        invalidateOnRefresh: true,
        pin: true,
        pinSpacing: true,
        scrub: true,
        end: () => "+=" + h * 1.5, // 1.5 to dampen the scroller
        scroller: scroller,
        start: "top top",
      },
    });

    gsap.utils.toArray(services).forEach((service, index) => {
      var y = 0;
      var accordionContent = 0;
      var serviceHeight;
      serviceHeight = 28;
      // if (window.screen.width > 768) {
      //   serviceHeight = 45;
      // } else {
      //   serviceHeight = 28;
      // }

      // $(service).on('click', function() {
      //   var clickTarget= -(window.innerHeight - index * 28);
      //   gsap.to($(this), 1, {y: clickTarget, ease:Power2.easeInOut});
      // });

      if (index == 0) {
        y = 0; // since we start this at the top, offset with the window height
        accordionContent =
          $(service).find(".accordion_contenet").height() -
          (window.innerHeight - 6 * serviceHeight);

        servicesPinTl.to(service, { y: -y });
        servicesPinTl.to(
          $(service).find(".accordion_contenet"),
          { y: -accordionContent },
          "<"
        );
      } else {
        y = window.innerHeight - index * serviceHeight;
        accordionContent =
          $(service).find(".accordion_contenet").height() -
          (window.innerHeight - 6 * serviceHeight);

        servicesPinTl.to(service, { y: -y });
        servicesPinTl.to($(service).find(".accordion_contenet"), {
          y: -accordionContent,
        });
      }
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
    gsap.from(".footer_content", {
      opacity: 0,
      top: "200px",
      scrollTrigger: {
        trigger: "footer",
        start: "top 50%",
        scroller: scroller,
      },
    });
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }
  function loadSingleProjectScripts() {
    var mySplitText = new SplitText($(".letter_wrap, .letter_wrap_scroll"), {
      type: "lines, words, chars",
      wordsClass: "word word++",
      linesClass: "line line++",
      charsClass: "char char++",
    });

    if (window.screen.width > 1024) {
      var scroller = "#viewport";
    } else {
      var scroller = "body";
    }

    var button = document.querySelector('.swiper_indicator_desktop');
    var buttonText = document.querySelector('.swiper_indicator_desktop span');
    var followArea = document.querySelector('.fifth_section_content .slider');
    var page = document.querySelector('.fifth_section_content .slider');

    // Follow Animation
    // ************
    var moveCircle = (e)  => {
      gsap.to(button, 0.25, {
        css: {
          left: e.pageX,
          top: e.pageY
        }
      });
    }

    followArea.addEventListener('mouseover', () => {
      gsap.to(button, 0.25, {
        scale: 1,
        autoAlpha: 1
      });
  
      page.addEventListener('mousemove', moveCircle);
    });
  
    followArea.addEventListener('mouseout', () => {
      gsap.to(button, 0.25, {
        scale: 0.5,
        autoAlpha: 0
      });
    });
  
    followArea.addEventListener('mousedown', () => {
  
  
      gsap.to(button, 0.5, {
        css: { transform: `translate(-50%, -50%) scale(0.75)` }
      });
  
      gsap.to(buttonText, 0.25, {
        css: { opacity: 1  }
      });
    });
  
    followArea.addEventListener('mouseup', () => {
      // gsap.to(button, 1, {
      //   css: { background: `transparent` }
      // });
  
      gsap.to(button, 0.5, {
        css: { transform: `translate(-50%, -50%) scale(1)` }
      });
  
      gsap.to(buttonText, 0.25, {
        css: {
          opacity: 1
        }
      });
    });

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
    } else {
      letterAnaimation = 0;
    }

    gsap.utils.toArray(".letter_wrap").forEach((section) => {
      if (
        section.parentElement.className == "home_wrap seventh_section_content"
      ) {
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
        Image Reveal
        --------------------------------------------------------------------------------- */
    if (window.screen.width > 650) {
      var image_height = "100vh";
    } else {
      var image_height = "100vh";
    }
    let singleProject_image_reveal = $(
      ".single_project_wrap .second_section .image_holder"
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".single_project_wrap .second_section",
          scrub: true,
          pin: true,
          pinSpacing: true,
          end: "+=100%",
          scroller: scroller,
        },
      })
      .to(singleProject_image_reveal, {
        width: "100vw",
        height: image_height,
        ease: "none",
      });

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

    class Slider {
      constructor({ el, row_id, wrap }) {
        // this.container = el;
        this.slider = el;
        this.row = row_id;

        this.wrap = wrap;

        this.proxy = this.row.querySelector(".proxy-slider");
        // this.inner = this.row.querySelector('#slider-inner');
        this.slides = [...this.slider.querySelectorAll(".image_holder")];
        this.slidesNumb = this.slides.length - 1;
        this.sliderWidth = 0;

        this.draggable = null;

        this.current = 0;
        this.last = 0;

        this.offset = 0;

        this.init();
      }

      // Set slider and proxy width/transform
      setBounds() {
        this.sliderWidth = this.slides[0].offsetWidth * this.slidesNumb;

        gsap.set([this.slider, this.proxy], {
          width: this.sliderWidth,
          x: 0,
        });
      }

      createDraggable() {
        let slider = this.slider,
          inner = this.inner,
          getter = gsap.getProperty(slider),
          updateX = () =>
            gsap.to(slider, {
              x: this.draggable.x - this.offset,
              ease: "power2",
              overwrite: "auto",
            });

        this.draggable = Draggable.create(this.proxy, {
          type: "x",
          edgeResistance: 1,
          bounds: {
            minX: this.row.offsetWidth - this.proxy.offsetWidth,
            maxX: 0,
          },
          inertia: true,
          throwProps: true,
          callbackScope: this,
          onPress: function (e) {
            gsap.to(slider.children, {
              duration: 0.4,
              ease: "power1.inOut",
              scale: 1,
              overwrite: true,
            });
            gsap.killTweensOf(slider);
            this.offset = this.draggable.x - getter("x");
          },
          onRelease: function () {
            gsap.to(slider.children, {
              duration: 1,
              ease: "power1.inOut",
              scale: 1,
              overwrite: true,
            });
            this.offset = 0;
          },
          onDrag: updateX,
          onThrowUpdate: updateX,
        })[0];
      }

      init() {
        this.setBounds();
        this.createDraggable();
      }
    }

    const slider = new Slider({
      el: document.querySelector(".image_slider"),
      row_id: document.querySelector(".fifth_section"),
      wrap: document.querySelector(".slider"),
    });

    gsap.from(".footer_content", {
      opacity: 0,
      top: "200px",
      scrollTrigger: {
        trigger: "footer",
        start: "top 50%",
        scroller: scroller,
      },
    });
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }

  function smoothScroll() {
    locoScroll = new LocomotiveScroll({
      el: document.querySelector("#viewport"),
      smooth: true,
      lerp: 0.06,
    });

    ScrollTrigger.scrollerProxy("#viewport", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#viewport").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.refresh();
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  }

  // $.getScript(site_data.theme_url + "/js/singleProject.js", function () {});
  // $.getScript(site_data.theme_url + "/js/home.js", function () {});
  // $.getScript(site_data.theme_url + "/js/services.js", function () {});
  // $.getScript(site_data.theme_url + "/js/about.js", function () {});
  // $.getScript(site_data.theme_url + "/js/portfolio.js", function () {});

  window.addEventListener("load", function () {
    // if (window.screen.width > 1024) {
    //   smoothScroll();
    // }

    if (window.screen.width > 1024) {
      // locoScroll.update();
    }
  });

  $(window).resize(function () {
    ScrollTrigger.refresh();
  });

  /*	-----------------------------------------------------------------------------
  BARBA
--------------------------------------------------------------------------------- */
  var currentProject;
  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  barba.hooks.afterLeave((data) => {
    var nextHtml = data.next.html;
    var response = nextHtml.replace(
      /(<\/?)body( .+?)?>/gi,
      "$1notbody$2>",
      nextHtml
    );
    var bodyClasses = $(response).filter("notbody").attr("class");
    $("body").attr("class", bodyClasses);

    document.getElementById("viewport").classList.add("loading");
  });

  barba.hooks.beforeEnter((data) => {
    window.scrollTo(0, 0);
    smoothScroll();
  });

  // barba.hooks.beforeOnce((data) => {});

  // barba.hooks.enter((data) => {
  // });

  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          locoScroll.destroy();
          const done = this.async();

          gsap.to(data.current.container, {
            opacity: 0,
          });

          await delay(650);

          done();
        },

        async enter(data) {
          gsap.from(data.next.container, {
            opacity: 0,
          });
        },

        // async once(data) {

        // },
      },
    ],

    views: [
      {
        namespace: "Home",
        afterEnter({ next }) {
          imagesLoaded(document.getElementById("viewport"), function () {
            globalScripts();
            loadIndexScripts();
            document.getElementById("viewport").classList.remove("loading");
          });
        },
      },
      {
        namespace: "work",
        afterEnter({ next }) {
          imagesLoaded(document.getElementById("viewport"), function () {
            globalScripts();
            loadSingleProjectScripts();
            document.getElementById("viewport").classList.remove("loading");
          });
        },
      },
      {
        namespace: "About",
        afterEnter({ next }) {
          imagesLoaded(document.getElementById("viewport"), function () {
            globalScripts();
            loadAboutScripts();
            document.getElementById("viewport").classList.remove("loading");
          });
        },
      },
      {
        namespace: "Portfolio",
        afterEnter({ next }) {
          imagesLoaded(document.getElementById("viewport"), function () {
            globalScripts();
            loadPortfolioScripts();
            document.getElementById("viewport").classList.remove("loading");
          });
        },
      },
      {
        namespace: "Services",
        afterEnter({ next }) {
          imagesLoaded(document.getElementById("viewport"), function () {
            globalScripts();
            loadServicesScripts();
            document.getElementById("viewport").classList.remove("loading");
          });
        },
      },
    ],
  });
})(jQuery);
