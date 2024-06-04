import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { itemSide } from '../../interfaces/items-side-interface';
import { ShowDashboardService } from '../../core/showDashboard/show-dashboard.service';

@Component({
  selector: 'app-items-side',
  standalone: true,
  imports: [],
  templateUrl: './items-side.component.html',
  styleUrl: './items-side.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemsSideComponent {
  constructor(private showDashboardService: ShowDashboardService) {}

  onClickItemSidebar(item: string): void {
    
    this.showDashboardService.setSelectedComponent(item);
  }

  @Input() itemSide: itemSide = {
    name: 'inicio',
    icon: 'algo',
    dropdown: false,
  };
  @Input() id: any = {
    id: 0,
  };

  @Input() selectComp: any;

  ngOnInit(): void {
    console.log(this.id);
  }
}
