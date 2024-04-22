import { Component } from '@angular/core';
import { Farmacias } from '../../interfaces/farmacias-interface';

@Component({
  selector: 'app-tabla-farmacias',
  standalone: true,
  imports: [],
  templateUrl: './tabla-farmacias.component.html',
  styleUrl: './tabla-farmacias.component.css',
})
export class TablaFarmaciasComponent {
  farmacias: Farmacias[] = [
    {
      id: 1,
      nombre: 'Gonzales',
      localidad: 'mercedes',
      direccion: 'calle 24 N° 658',
      email: 'XXXXXXXXXXXXXXXXXX',
      caracteristica: 2324,
      telefono: 461486,
      whatsapp: 502670,
    },
    {
      id: 2,
      nombre: 'Rubiero',
      localidad: 'mercedes',
      direccion: 'calle 24 N° 658',
      email: 'XXXXXXXXXXXXXXXXXX',
      caracteristica: 2324,
      telefono: 461486,
      whatsapp: 502670,
    },
    {
      id: 3,
      nombre: 'Gonzales',
      localidad: 'mercedes',
      direccion: 'calle 24 N° 658',
      email: 'XXXXXXXXXXXXXXXXXX',
      caracteristica: 2324,
      telefono: 461486,
      whatsapp: 502670,
    },
    {
      id: 4,
      nombre: 'Gonzales',
      localidad: 'mercedes',
      direccion: 'calle 24 N° 658',
      email: 'XXXXXXXXXXXXXXXXXX',
      caracteristica: 2324,
      telefono: 461486,
      whatsapp: 502670,
    },
    {
      id: 5,
      nombre: 'Gonzales',
      localidad: 'mercedes',
      direccion: 'calle 24 N° 658',
      email: 'XXXXXXXXXXXXXXXXXX',
      caracteristica: 2324,
      telefono: 461486,
      whatsapp: 502670,
    },
  ];
  filterFarmacia({ value }: any) {
    return this.farmacias.includes(value);
  }
}
