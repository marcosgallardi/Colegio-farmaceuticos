import { Component } from '@angular/core';
import { ItemsSideComponent } from '../items-side/items-side.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ItemsSideComponent,AsyncPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  itemSides = {
    name: 'vergero',
    icon: 'bi bi-house',
    dropdown: false,
  };
}
