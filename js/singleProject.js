(function ($) {
  //document ready
  $(document).ready(function () {
    if (window.screen.width > 1024) {
      var scroller = "#viewport";
    } else {
      var scroller = "body";
    }

    /*-----------------------------------------------------------------------------
        Image Reveal
        --------------------------------------------------------------------------------- */
    if (window.screen.width > 650) {
      var image_height = "100vh";
    } else {
      var image_height = "70vh";
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
  });
})(jQuery);
