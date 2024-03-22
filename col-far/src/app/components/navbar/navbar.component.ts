import { Component } from '@angular/core';
import { ButtonMainComponent } from '../button-main/button-main.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonMainComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  text: string = ``;
}
