$('.js-slider').addClass('owl-carousel')
  .owlCarousel({
    items: 1,
    autoHeight: true,
    dots: false,
    nav: true,
    navClass: ['libra__slider-btn libra__slider-btn--prev', 'libra__slider-btn libra__slider-btn--next'],
    navText: ['<span class="visually-hidden">Предыдущий</span>', '<span class="visually-hidden">Следующий</span>']
  })
  .on('translate.owl.carousel', function(event) {
    var links = $('.js-menu .menu__link');
    links.removeClass('menu__link--active');
    $(links[event.item.index]).addClass('menu__link--active');
  });

$('.js-menu .menu__link').each(function(index) {
  $(this).click(function(event) {
    event.preventDefault();
    $('.js-slider').trigger('to.owl.carousel', index);
  });
});
