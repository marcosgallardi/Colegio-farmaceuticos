import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NosotrosComponent } from '../../../components/nosotros/nosotros.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ComisionDirectivaComponent } from '../../../components/comision-directiva/comision-directiva.component';
import { BannerTitleComponent } from '../../../components/banner-title/banner-title.component';

@Component({
  selector: 'app-institucional-page',
  standalone: true,
  imports: [
    NavbarComponent,
    NosotrosComponent,
    FooterComponent,
    ComisionDirectivaComponent,
    BannerTitleComponent,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './institucional-page.component.html',
  styleUrl: './institucional-page.component.css',
})
export class InstitucionalPageComponent {}
