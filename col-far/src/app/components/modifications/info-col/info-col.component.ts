import { Component } from '@angular/core';
import { NosotrosComponent } from '../../nosotros/nosotros.component';

@Component({
  selector: 'app-info-col',
  standalone: true,
  imports: [NosotrosComponent],
  templateUrl: './info-col.component.html',
  styleUrl: './info-col.component.css'
})
export class InfoColComponent {

}
