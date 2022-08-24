import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoOverviewPageComponent } from './todo-overview-page.component';

const routes: Routes = [{ path: '', component: TodoOverviewPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoOverviewPageRoutingModule { }
