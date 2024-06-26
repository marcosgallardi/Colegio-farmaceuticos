import { Routes } from '@angular/router';
import { InstitucionalPageComponent } from './pages/institucional-page/institucional-page/institucional-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FarmaciasPageComponent } from './pages/farmacias-page/farmacias-page.component';
import { NovedadesPageComponent } from './pages/novedades-page/novedades-page/novedades-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page/contacto-page.component';
import { FarmTurnosPagesComponent } from './pages/farm-turnos-pages/farm-turnos-pages/farm-turnos-pages.component';
import { NovDetailPageComponent } from './pages/nov-detail-page/nov-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'institucional',
    component: InstitucionalPageComponent,
  },
  {
    path: 'farmacias',
    component: FarmaciasPageComponent,
  },
  {
    path: 'novedades',
    component: NovedadesPageComponent,
  },
  {
    path: 'contacto',
    component: ContactoPageComponent,
  },
  {
    path: 'farmacias-turno',
    component: FarmTurnosPagesComponent,
  },
  {
    path: 'novedadesDetail/:id',
    component: NovDetailPageComponent,
  },
  { path: 'novedades/novedadesDetail/:id', component: NovDetailPageComponent },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
