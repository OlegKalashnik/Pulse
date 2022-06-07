$('.owl-carousel').owlCarousel({
  loop: true,
  items: 1,
  autoplay: false,
  autoplayHoverPause: true,
  autoplaySpeed: 1500,
  navSpeed: 1000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: false,
    },
    992: {
      nav: true,
      dots: false,
    },
  },
})
