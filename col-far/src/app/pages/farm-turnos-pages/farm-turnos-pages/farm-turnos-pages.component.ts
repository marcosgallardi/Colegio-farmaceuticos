import { Component } from '@angular/core';
import { dateFunction } from '../../../helpers/funcTionDates';
import { TurnosFarmComponent } from '../../../components/turnos-farm/turnos-farm.component';

@Component({
  selector: 'app-farm-turnos-pages',
  standalone: true,
  imports: [TurnosFarmComponent],
  templateUrl: './farm-turnos-pages.component.html',
  styleUrl: './farm-turnos-pages.component.css',
})
export class FarmTurnosPagesComponent {
  dateFunctionInstance = new dateFunction();
}
