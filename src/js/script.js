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
  toggleSlide('.catalog-item__link_back')

  //modals
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow')
  })
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
  })
  $('[data-modal=order]').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
      $('.overlay, #order').fadeIn('slow')
    })
  })

  function validateForms(form) {
    $(form).validate({
      rules: {
        // simple rule, converted to {required:true}
        name: {
          required: true,
          minlength: 2,
        },
        phone: 'required',
        // compound rule
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Введите своё имя',
          minlength: jQuery.validator.format('Минимум {0} символа!'),
        },
        phone: 'Введите свой телефон',
        email: {
          required: 'Введите свою почту',
          email: 'Неверный формат',
        },
      },
    })
  }

  validateForms('#order form')
  validateForms('#consultation form')
  validateForms('#consultation-form')
})
