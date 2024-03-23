import { Component, Input } from '@angular/core';
import { ButtonInterface } from '../../interfaces/button-interface';

@Component({
  selector: 'app-button-main',
  standalone: true,
  imports: [],
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.css',
})
export class ButtonMainComponent {
  @Input() text: ButtonInterface = {
    text: 'Inicio',
    span: 'Inicio',
    icon: false,
  };
}
