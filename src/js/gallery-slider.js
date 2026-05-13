import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

new Swiper('.gallery-swiper', {
  modules: [EffectCoverflow, Navigation, Keyboard],

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  slidesPerView: 1,
  initialSlide: 2,

  // smoothness like a “finger”
  speed: 600,
  longSwipes: true,
  longSwipesRatio: 0.2,
  resistanceRatio: 0.85,
  simulateTouch: true,
  touchRatio: 1,

  watchOverflow: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: false,
  },

  breakpoints: {
    1440: {
      slidesPerView: 'auto',
    },
  },

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  keyboard: {
    enabled: true,
  },
});
