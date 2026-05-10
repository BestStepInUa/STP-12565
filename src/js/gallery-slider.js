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

  slidesPerView: 1,

  // smoothness like a “finger”
  speed: 1250,
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
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  keyboard: {
    enabled: true,
  },
});
