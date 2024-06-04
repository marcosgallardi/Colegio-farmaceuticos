import { Component, SimpleChange } from '@angular/core';
import { NavDashboardComponent } from '../../../components/nav-dashboard/nav-dashboard.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { ContactosComponent } from '../../../components/modifications/contactos/contactos.component';
import { NovedadesComponent } from '../../../components/modifications/novedades/novedades.component';
import { FarmaciasComponent } from '../../../components/modifications/farmacias/farmacias.component';
import { ModDatosComponent } from '../../../components/modifications/mod-datos/mod-datos.component';
import { TurnosComponent } from '../../../components/modifications/turnos/turnos.component';
import { ShowDashboardService } from '../../../core/showDashboard/show-dashboard.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavDashboardComponent,
    SidebarComponent,
    ContactosComponent,
    NovedadesComponent,
    FarmaciasComponent,
    ModDatosComponent,
    TurnosComponent,
    AsyncPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  currentComponent: string | undefined;

  constructor(private showDashboardService: ShowDashboardService) {}

  ngDoCheck( ): void {
    this.currentComponent = this.showDashboardService.getSelectedComponent();
  }
}
