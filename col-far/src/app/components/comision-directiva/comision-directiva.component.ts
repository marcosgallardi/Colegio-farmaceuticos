import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Comision } from '../../interfaces/comision-interface';
import { ComisionService } from '../../core/comision/comision.service';

import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-comision-directiva',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './comision-directiva.component.html',
  styleUrl: './comision-directiva.component.css',
})
export class ComisionDirectivaComponent implements OnInit {
  config: SwiperOptions = {};
  //  comisionList: Comision[] = [];
  // comisionService: ComisionService = inject(ComisionService);
  // constructor() {
  //   this.comisionService.getComisiones().then((comisionList: Comision[]) => {
  //     this.comisionList = comisionList;
  //   });
  // }
  ngOnInit(): void {
    this.config = {
      direction: 'vertical',
      loop: true,

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
  comisionList: Comision[] = [
    {
      image: '../../../assets/integrante.jpg',
      name: 'Josep Guardiola',
      title: 'Presidente',
    },
    {
      image: '../../../assets/integrante.jpg',
      name: 'Josep Guardiola',
      title: 'Vicepresidente',
    },
    {
      image: '../../../assets/integrante.jpg',
      name: 'Josep Guardiola',
      title: 'Secretario',
    },
    {
      image: '../../../assets/integrante.jpg',
      name: 'Josep Guardiola',
      title: 'Tesorero',
    },
    
  ];
}
