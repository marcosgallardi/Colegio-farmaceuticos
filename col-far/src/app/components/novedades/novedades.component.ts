import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-novedades',
  standalone: true,
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NovedadesComponent implements OnInit {
  config: SwiperOptions = {}; // Objeto de configuración para Swiper

  constructor() {}

  ngOnInit() {
    this.config = {
      direction: 'vertical',
      loop: true,

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
      
    };
  }
 
}
