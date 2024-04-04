import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css',
})
export class NovedadesComponent {
  swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
modules: [Navigation, Pagination],
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
