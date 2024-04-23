import { Component } from '@angular/core';
import { BannerTitleComponent } from '../../../components/banner-title/banner-title.component';
import { NovedadesComponent } from '../../../components/novedades/novedades.component';

@Component({
  selector: 'app-novedades-page',
  standalone: true,
  imports: [BannerTitleComponent, NovedadesComponent],
  templateUrl: './novedades-page.component.html',
  styleUrl: './novedades-page.component.css',
})
export class NovedadesPageComponent {}
