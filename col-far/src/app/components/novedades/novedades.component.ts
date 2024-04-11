import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { ButtonMainComponent } from '../button-main/button-main.component';
import { ButtonInterface } from '../../interfaces/button-interface';
import { NovedadesService } from '../../core/novedades.service';
import { Observable } from 'rxjs';
import { Novedades } from '../../interfaces/novedades-interface';

@Component({
  selector: 'app-novedades',
  standalone: true,
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css'],
  imports: [ButtonMainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NovedadesComponent implements OnInit {
  config: SwiperOptions = {};
  public novedades$!: Observable<Novedades>;
  constructor(private service: NovedadesService) {}

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
    this.novedades$ = this.service.getNovedades();

    this.novedades$.subscribe((resp: Novedades) => {
     return resp
    });
  }
  textButton: ButtonInterface = {
    text: 'VER TODAS',
    span: '',
    icon: false,
  };
}
