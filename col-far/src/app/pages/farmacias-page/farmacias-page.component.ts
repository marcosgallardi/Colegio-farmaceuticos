import { Component } from '@angular/core';
import { TablaFarmaciasComponent } from '../../components/tabla-farmacias/tabla-farmacias.component';
import { BannerTitleComponent } from '../../components/banner-title/banner-title.component';

@Component({
  selector: 'app-farmacias-page',
  standalone: true,
  imports: [TablaFarmaciasComponent,BannerTitleComponent],
  templateUrl: './farmacias-page.component.html',
  styleUrl: './farmacias-page.component.css',
})
export class FarmaciasPageComponent {}
