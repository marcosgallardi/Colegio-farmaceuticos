import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
  @Input() isDashboard: boolean = false;
  idSelected: number = 0;
  @Output() isSelected = new EventEmitter<boolean>();
  value: boolean = false;
  onClickButtons(id: number) {
    this.value = !this.value;
    this.isSelected.emit(this.value);
    this.idSelected = id;
  }
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
      id: 1,
      image: '../../../assets/integrante.jpg',
      name: 'Josep Guardiola',
      title: 'Presidente',
    },
    {
      id: 2,
      image: '../../../assets/integrante.jpg',
      name: 'Josep Guardiola',
      title: 'Vicepresidente',
    },
    {
      id: 3,
      image: '../../../assets/integrante.jpg',
      name: 'Josep Guardiola',
      title: 'Secretario',
    },
    {
      id: 4,
      image: '../../../assets/integrante.jpg',
      name: 'Josep Guardiola',
      title: 'Tesorero',
    },
  ];
}
