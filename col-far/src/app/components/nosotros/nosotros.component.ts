import { Component } from '@angular/core';
import { ButtonMainComponent } from '../button-main/button-main.component';
import { ButtonInterface } from '../../interfaces/button-interface';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [ButtonMainComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent {
  textButtons1: ButtonInterface = {
    text: 'Conocenos',
  };
  textButtons2: ButtonInterface = {
    text: 'Comisión directiva',
  };
}
