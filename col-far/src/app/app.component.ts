import {
  ChangeDetectorRef,
  Component,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { InstitucionalPageComponent } from './pages/institucional-page/institucional-page/institucional-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingPageComponent,
    InstitucionalPageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'col-far';
}
