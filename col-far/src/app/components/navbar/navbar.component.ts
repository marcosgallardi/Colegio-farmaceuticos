import { Component } from '@angular/core';
import { ButtonMainComponent } from '../button-main/button-main.component';
import { ButtonInterface } from '../../interfaces/button-interface';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonMainComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  button: ButtonInterface = {
    text: 'Farmacias de',
    span: 'Turno',
    icon: true,
  };
}
