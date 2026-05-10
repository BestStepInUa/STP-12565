import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.gallery-swiper', {
  modules: [Navigation, Keyboard],

  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  keyboard: {
    enabled: true,
  },
});
