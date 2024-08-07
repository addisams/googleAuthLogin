import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseComponent } from './browse/browse.component';

export const routes: Routes = [
  //   {
  //     path: '',
  //     loadComponent: () =>
  //       import('./login/login.component').then((a) => a.LoginComponent),
  //   },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full',
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
