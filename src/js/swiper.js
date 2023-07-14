import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiperYachts = new Swiper('#swiper-yahts', {
  // Optional parameters
  direction: 'horizontal',
  centeredSlides: false,
  loop: true,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
      
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperReview = new Swiper('#swiper-reviews', {
  // Optional parameters
  direction: 'horizontal',
  centeredSlides: false,
  watchOverFlow: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  
  pagination: {
    el: '.swiper-pagination',
  },
});
