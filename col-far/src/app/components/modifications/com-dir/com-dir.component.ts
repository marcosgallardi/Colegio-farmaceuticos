import { Component } from '@angular/core';
import { ComisionDirectivaComponent } from '../../comision-directiva/comision-directiva.component';

@Component({
  selector: 'app-com-dir',
  standalone: true,
  imports: [ComisionDirectivaComponent],
  templateUrl: './com-dir.component.html',
  styleUrl: './com-dir.component.css',
})
export class ComDirComponent {
  isSelected: boolean = false;

  handleSelection(selected: boolean) {
    this.isSelected = selected;
  }
}
