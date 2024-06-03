import { Component } from '@angular/core';
import { ItemsSideComponent } from '../items-side/items-side.component';
import { AsyncPipe } from '@angular/common';
import { itemSide } from '../../interfaces/items-side-interface';
import { ShowDashboardService } from '../../core/showDashboard/show-dashboard.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ItemsSideComponent, AsyncPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private showDashboardService: ShowDashboardService) {}

  onClickItemSidebar(item: string) {
    this.showDashboardService.setSelectedComponent(item);
  }

  itemSides: itemSide[] = [
    {
      name: 'Colegio',
      icon: 'bi bi-house',
      dropdown: true,
    },
    {
      name: 'Usuarios',
      icon: 'bi bi-people',
      dropdown: true,
    },
    {
      name: 'Novedades',
      icon: 'bi bi-window-stack',
      dropdown: false,
    },
    {
      name: 'Farmacias',
      icon: 'bi bi-shop',
      dropdown: false,
    },
    {
      name: 'Contacto',
      icon: 'bi bi-telephone',
      dropdown: false,
    },
    {
      name: 'Turnos',
      icon: 'bi bi-layout-text-sidebar-reverse',
      dropdown: false,
    },
    {
      name: 'Datos',
      icon: 'bi bi-bar-chart-line',
      dropdown: false,
    },
  ];
}
