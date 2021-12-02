(function ($) {
  //document ready

  $(window).resize(function () {
    ScrollTrigger.refresh();
  });

  $(".line").each(function () {
    var words = jQuery(this).text().split(" ");
    jQuery(this)
      .empty()
      .html(function () {
        for (i = 0; i < words.length; i++) {
          if (i == 0) {
            jQuery(this).append(
              '<div class="single_word">' + words[i] + "</div>"
            );
          } else {
            jQuery(this).append(
              ' <div class="single_word">' + words[i] + "</div>"
            );
          }
        }
      });
  });

  $(".single_word").html(function (index, html) {
      return html.replace(/\S/g, '<span>$&</span>');
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  $(window).resize(function(){ScrollTrigger.refresh();})
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
