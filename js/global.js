var locoScroll;

(function ($) {
  //document ready

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  function smoothScroll() {
    locoScroll = new LocomotiveScroll({
      el: document.querySelector("#viewport"),
      smooth: true,
      lerp: 0.05,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
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
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }

  var mySplitText = new SplitText($(".letter_wrap, .letter_wrap_scroll"), {
    type: "lines, words, chars",
    wordsClass: "word word++",
    linesClass: "line line++",
    charsClass: "char char++",
  });

  window.addEventListener("load", function () {
    smoothScroll();
    $.getScript(site_data.theme_url + "/js/home.js", function () {});
    $.getScript(site_data.theme_url + "/js/about.js", function () {});
    $.getScript(site_data.theme_url + "/js/portfolio.js", function () {});
    locoScroll.update();
  });

  $(window).resize(function () {
    ScrollTrigger.refresh();
  });
})(jQuery);
