import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper',
  {
  // Optional parameters
  direction: 'horizontal',
    centeredSlides: false,
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
            spaceBetween: 16
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 32
            
        },
    },
    watchOverFlow: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    }
   });