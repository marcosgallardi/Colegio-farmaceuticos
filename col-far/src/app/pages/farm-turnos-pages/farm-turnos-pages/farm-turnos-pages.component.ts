import { Component } from '@angular/core';
import { dateFunction } from '../../../helpers/funcTionDates';

@Component({
  selector: 'app-farm-turnos-pages',
  standalone: true,
  imports: [],
  templateUrl: './farm-turnos-pages.component.html',
  styleUrl: './farm-turnos-pages.component.css',
})
export class FarmTurnosPagesComponent {
  dateFunctionInstance = new dateFunction();
  
}
