import { Component } from '@angular/core';
import { TurnosFarmComponent } from '../../turnos-farm/turnos-farm.component';
import { ButtonMainComponent } from '../../button-main/button-main.component';

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [TurnosFarmComponent,ButtonMainComponent],
  templateUrl: './turnos.component.html',
  styleUrl: './turnos.component.css',
})
export class TurnosComponent {}
