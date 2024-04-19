import { Component } from '@angular/core';
import { TablaFarmaciasComponent } from '../../components/tabla-farmacias/tabla-farmacias.component';

@Component({
  selector: 'app-farmacias-page',
  standalone: true,
  imports: [TablaFarmaciasComponent],
  templateUrl: './farmacias-page.component.html',
  styleUrl: './farmacias-page.component.css'
})
export class FarmaciasPageComponent {

}
