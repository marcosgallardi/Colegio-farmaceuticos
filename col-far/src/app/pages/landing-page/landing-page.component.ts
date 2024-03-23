import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent,NosotrosComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
