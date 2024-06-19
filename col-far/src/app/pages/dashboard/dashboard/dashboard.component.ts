import { Component, SimpleChange } from '@angular/core';
import { NavDashboardComponent } from '../../../components/nav-dashboard/nav-dashboard.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { ContactosComponent } from '../../../components/modifications/contactos/contactos.component';
import { FarmaciasComponent } from '../../../components/modifications/farmacias/farmacias.component';
import { ModDatosComponent } from '../../../components/modifications/mod-datos/mod-datos.component';
import { TurnosComponent } from '../../../components/modifications/turnos/turnos.component';
import { ShowDashboardService } from '../../../core/showDashboard/show-dashboard.service';
import { AsyncPipe } from '@angular/common';
import { ModNovedadesComponent } from '../../../components/modifications/mod-novedades/mod-novedades.component';
import { ActUserComponent } from '../../../components/modifications/act-user/act-user.component';
import { ComDirComponent } from '../../../components/modifications/com-dir/com-dir.component';
import { CrearUserComponent } from '../../../components/modifications/crear-user/crear-user.component';
import { ElimUserComponent } from '../../../components/modifications/elim-user/elim-user.component';
import { InfoColComponent } from '../../../components/modifications/info-col/info-col.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavDashboardComponent,
    SidebarComponent,
    ContactosComponent,
    ModNovedadesComponent,
    FarmaciasComponent,
    ModDatosComponent,
    TurnosComponent,
    ActUserComponent,
    ComDirComponent,
    CrearUserComponent,
    ElimUserComponent,
    InfoColComponent,
    AsyncPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  currentComponent: string | undefined;

  constructor(private showDashboardService: ShowDashboardService) {}

  ngDoCheck(): void {
    this.currentComponent = this.showDashboardService.getSelectedComponent();
  }
}
