import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo-overview',
    loadComponent: () =>
      import('./pages/todo-overview-page/todo-overview-page.component').then(
        (m) => m.TodoOverviewPageComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo-overview',
  },
  {
    path: '**',
    redirectTo: 'todo-overview',
  },
];
