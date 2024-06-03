import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { itemSide } from '../../interfaces/items-side-interface';

@Component({
  selector: 'app-items-side',
  standalone: true,
  imports: [],
  templateUrl: './items-side.component.html',
  styleUrl: './items-side.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemsSideComponent {
  @Input() itemSide: itemSide = {
    name: 'inicio',
    icon: 'algo',
    dropdown: false,
  };
  @Input() id: any = {
    id: 0,
  };

  @Input() selectComp: (string:string) => void = ;
  ngOnInit(): void {
    console.log(this.id);
  }
}
