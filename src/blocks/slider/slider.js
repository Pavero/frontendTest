$('.js-slider').addClass('owl-carousel')
  .owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoHeight: true,
    navContainer: '.slider__wrapper',
    navClass: ['slider__btn slider__btn--prev', 'slider__btn slider__btn--next'],
    navText: ['<span class="visually-hidden">Предыдущий</span>', '<span class="visually-hidden">Следующий</span>']
});
