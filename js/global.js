(function ($) {
  //document ready

  $(window).resize(function () {
    ScrollTrigger.refresh();
  });


  var mySplitText = new SplitText($('.letter_wrap, .letter_wrap_scroll'), {
    type: "lines, words, chars",
    wordsClass: 'word word++',
    linesClass: 'line line++',
    charsClass: 'char char++'
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  $(window).resize(function(){ScrollTrigger.refresh();})

  $.getScript(site_data.theme_url + "/js/about.js", function () {});
  $.getScript(site_data.theme_url + "/js/home.js", function () {});
  $.getScript(site_data.theme_url + "/js/portfolio.js", function () {});
  
})(jQuery);
