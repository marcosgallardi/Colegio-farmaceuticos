import { Component } from '@angular/core';
import { Farmacias } from '../../interfaces/farmacias-interface';

@Component({
  selector: 'app-turnos-farm',
  standalone: true,
  imports: [],
  templateUrl: './turnos-farm.component.html',
  styleUrl: './turnos-farm.component.css',
})
export class TurnosFarmComponent {
  farmaciasTurnos: any = [{}];
}
