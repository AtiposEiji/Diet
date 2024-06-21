import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'season/:seasonId',
    loadComponent: () => import('./pages/dashboard/page/season/season.component').then(c => c.SeasonComponent)
  },
  {
    path: 'season/:seasonId/day/:dayId',
    loadComponent: () => import('./pages/dashboard/page/day/day.component').then(c => c.DayComponent)
  },
  {
    path: 'calculator/:idFood',
    loadComponent: () => import('./pages/dashboard/page/calculator/calculator.component').then(c => c.CalculatorComponent)
  }
];
