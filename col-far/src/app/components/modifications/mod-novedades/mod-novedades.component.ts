import { Component } from '@angular/core';
import { NovedadesComponent } from '../../novedades/novedades.component';

@Component({
  selector: 'app-mod-novedades',
  standalone: true,
  imports: [NovedadesComponent],
  templateUrl: './mod-novedades.component.html',
  styleUrl: './mod-novedades.component.css',
})
export class ModNovedadesComponent {}
