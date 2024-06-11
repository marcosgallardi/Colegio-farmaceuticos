import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-turnos-farm',
  standalone: true,
  imports: [],
  templateUrl: './turnos-farm.component.html',
  styleUrl: './turnos-farm.component.css',
})
export class TurnosFarmComponent {
  @Input() isDashboard: boolean = false;
  farmaciasTurnos: any = [{}];
}
