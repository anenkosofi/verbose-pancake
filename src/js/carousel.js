new Swiper('.testimonials__comments', {
  loop: true,
  spaceBetween: 180,
  grabCursor: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  navigation: {
    nextEl: '.testimonials__button_right',
    prevEl: '.testimonials__button_left',
  },
});
