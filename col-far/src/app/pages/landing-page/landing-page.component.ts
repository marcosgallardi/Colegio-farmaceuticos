import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';
import { DatosComponent } from '../../components/datos/datos.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NovedadesComponent } from '../../components/novedades/novedades.component';

import { ColegiosService } from '../../core/colegios.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    NosotrosComponent,
    DatosComponent,
    FooterComponent,
    NovedadesComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  constructor(private service: ColegiosService) {}

  colegioService: ColegiosService = inject(ColegiosService);

  colegio = this.colegioService.getColegios();
  ngOnInit(): void {
    
  }
}
