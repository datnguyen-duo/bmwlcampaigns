(function ($) {
  //document ready

  $(window).resize(function () {
    ScrollTrigger.refresh();
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  //   var static = $(".noise");
  //   TweenMax.to(".noise", 0.03, {
  //     repeat: -1,
  //     onRepeat: repeatStatic,
  //     ease: SteppedEase.config(1),
  //   });
  //   function repeatStatic() {
  //     TweenMax.set(".noise", {
  //       backgroundPosition:
  //         Math.floor(Math.random() * 100) +
  //         1 +
  //         "% " +
  //         Math.floor(Math.random() * 10) +
  //         1 +
  //         "%",
  //     });
  //   }
  $.getScript(site_data.theme_url + "/js/about.js", function () {});
  $.getScript(site_data.theme_url + "/js/home.js", function () {});
  $.getScript(site_data.theme_url + "/js/portfolio.js", function () {});
  
})(jQuery);
