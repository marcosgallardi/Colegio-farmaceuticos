import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NosotrosComponent } from '../../../components/nosotros/nosotros.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-institucional-page',
  standalone: true,
  imports: [NavbarComponent, NosotrosComponent, FooterComponent],
  templateUrl: './institucional-page.component.html',
  styleUrl: './institucional-page.component.css',
})
export class InstitucionalPageComponent {}
