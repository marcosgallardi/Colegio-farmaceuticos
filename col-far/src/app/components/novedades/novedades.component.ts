import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { ButtonMainComponent } from '../button-main/button-main.component';
import { ButtonInterface } from '../../interfaces/button-interface';
import { NovedadesService } from '../../core/novedades.service';
import { Observable } from 'rxjs';
import { Novedades } from '../../interfaces/novedades-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-novedades',
  standalone: true,
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css'],
  imports: [ButtonMainComponent, RouterLink],
  providers: [NovedadesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NovedadesComponent implements OnInit {
  @Input() showTitle: boolean = true;

  config: SwiperOptions = {};
  novedadesList: Novedades[] = [
    {
      id: 1,
      imgNov: '../../assets/novedad.jpg',
      fecha: '9/04/2024',
      titulo:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y',
      subtitulo:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y',
      descripcion:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    },
    {
      id: 2,
      imgNov: '../../assets/novedad.jpg',
      fecha: '10/04/2024',
      titulo:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y',
      subtitulo:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y',
      descripcion:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    },
    {
      id: 3,
      imgNov: '../../assets/novedad.jpg',
      fecha: '11/04/2024',
      titulo:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y',
      subtitulo:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y',
      descripcion:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    },
  ];
  // novedadesList: Novedades[] = [];
  // novedadesService: NovedadesService = inject(NovedadesService);
  // constructor() {
  //   this.novedadesService.getNovedades().then((novedadesList: Novedades[]) => {
  //     this.novedadesList = novedadesList;
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
  textButton: ButtonInterface = {
    text: 'VER TODAS',
    span: '',
    icon: false,
  };
}
