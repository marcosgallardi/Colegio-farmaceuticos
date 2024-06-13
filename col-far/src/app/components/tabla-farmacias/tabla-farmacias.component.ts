import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Farmacias } from '../../interfaces/farmacias-interface';

@Component({
  selector: 'app-tabla-farmacias',
  standalone: true,
  imports: [],
  templateUrl: './tabla-farmacias.component.html',
  styleUrl: './tabla-farmacias.component.css',
})
export class TablaFarmaciasComponent {
  @Input() isDashboard: boolean = false;
  @Output() isSelected = new EventEmitter<boolean>();
  value: boolean = false;
  idSelected: number = 0;
  onClickButtons(id: number) {
    this.value = !this.value;
    this.isSelected.emit(this.value);
    this.idSelected = id;
  }

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
      localidad: 'gowland',
      direccion: 'calle 24 N° 658',
      email: 'XXXXXXXXXXXXXXXXXX',
      caracteristica: 2324,
      telefono: 461486,
      whatsapp: 502670,
    },
    {
      id: 5,
      nombre: 'Gonzales',
      localidad: 'gowland',
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
