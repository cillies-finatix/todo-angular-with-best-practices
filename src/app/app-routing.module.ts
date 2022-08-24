import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo-overview',
    loadChildren: () =>
      import('./pages/todo-overview-page/todo-overview-page.module').then(
        (m) => m.TodoOverviewPageModule
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
