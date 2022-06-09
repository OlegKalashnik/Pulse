$(document).ready(function () {
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

  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active')
    }
  )

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault()
        $('.catalog-item__content')
          .eq(i)
          .toggleClass('catalog-item__content_active')
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    })
  }
  toggleSlide('.catalog-item__link')
  toggleSlide('.catalog-item__link__back')
})
