import { Routes } from '@angular/router';
import { InstitucionalPageComponent } from './pages/institucional-page/institucional-page/institucional-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FarmaciasPageComponent } from './pages/farmacias-page/farmacias-page.component';

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
];
