import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

new Swiper('.reviews-swiper', {
  modules: [EffectCoverflow, Navigation, Keyboard],

  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
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
    rotate: 50,
    stretch: 0,
    depth: 120,
    modifier: 1.5,
    slideShadows: false,
    scale: 0.95,
  },

  navigation: {
    nextEl: '.reviews-slider-button-next',
    prevEl: '.reviews-slider-button-prev',
  },

  keyboard: {
    enabled: true,
  },
});
