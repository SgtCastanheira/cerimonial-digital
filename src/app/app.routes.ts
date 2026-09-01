import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'ao-vivo',
    loadComponent: () => import('./pages/live/live').then((m) => m.Live),
  },
  {
    path: 'cerimonialista',
    loadComponent: () => import('./pages/officiant/officiant').then((m) => m.Officiant),
  },
  {
    path: 'musicos',
    loadComponent: () => import('./pages/musicians/musicians').then((m) => m.Musicians),
  },
  {
    path: 'roteiro',
    loadComponent: () => import('./pages/script/script').then((m) => m.Script),
  },
  {
    path: 'equipe',
    loadComponent: () => import('./pages/team/team').then((m) => m.Team),
  },
  { path: '**', redirectTo: '' },
];
