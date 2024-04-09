import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';
import { DatosComponent } from '../../components/datos/datos.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NovedadesComponent } from '../../components/novedades/novedades.component';

import { ColegiosService } from '../../core/colegios.service';
import { Observable } from 'rxjs';
import { Colegios } from '../../interfaces/colegios-interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    NosotrosComponent,
    DatosComponent,
    FooterComponent,
    NovedadesComponent,
    AsyncPipe,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  public colegio$!: Observable<Colegios>;
  constructor(private service: ColegiosService) {}

  ngOnInit(): void {
    this.colegio$ = this.service.getColegios();
  }
}
