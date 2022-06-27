$(document).ready(function () {
  var headerSlider = $("#headerSlider");
  headerSlider.owlCarousel({
    loop: true,
    center: true,
    nav: true,
    dots: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    vidio: true,
    // padding:15,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      360: {
        items: 1,
        nav: false,
        margin: 100,
      },
      768: {
        items: 1,
        nav: true,
        margin: 10,
      },
      1024: {
        items: 1,
        nav: true,
      },
    },
  });
  var partnerSlider = $("#partners");
  partnerSlider.owlCarousel({
    loop: true,
    center:false,
    nav: false,
    dots: false,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    vidio: true,
    // padding:15,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      360: {
        items: 1,
        nav: false,
        center:true,
      },
      768: {
        items: 2,
        margin: 10,
      },
      1024: {
        items: 3,
        margin:16,
      },
      1400: {
        items: 4,
        margin:16,
      },
    },
  });
});
// partners slider end

//burger menu
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.menu').toggleClass('active');
  });
});

//! counter
//
// number count for stats, using jQuery animate

$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');
  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },
    {
      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });
});