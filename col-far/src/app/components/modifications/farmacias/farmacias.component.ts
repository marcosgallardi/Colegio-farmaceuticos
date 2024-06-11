import { Component } from '@angular/core';
import { TablaFarmaciasComponent } from '../../tabla-farmacias/tabla-farmacias.component';

@Component({
  selector: 'app-farmacias',
  standalone: true,
  imports: [TablaFarmaciasComponent],
  templateUrl: './farmacias.component.html',
  styleUrl: './farmacias.component.css',
})
export class FarmaciasComponent {
  isSelected: boolean = false;

  onClickButtons() {
    setTimeout(() => {
      this.isSelected = !this.isSelected;
    }, 200);
  }
}
