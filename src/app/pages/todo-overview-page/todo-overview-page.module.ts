import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodoCountContainerModule } from '../../features/feature-todo-count/todo-count-container/todo-count-container.module';
import { TodoInputFieldContainerModule } from '../../features/feature-todo-input-field/todo-input-field-container/todo-input-field-container.module';
import { TodoListContainerModule } from '../../features/feature-todo-list/todo-list-container/todo-list-container.module';
import { TodoOverviewPageRoutingModule } from './todo-overview-page-routing.module';
import { TodoOverviewPageComponent } from './todo-overview-page.component';

@NgModule({
  declarations: [TodoOverviewPageComponent],
  imports: [
    CommonModule,
    TodoOverviewPageRoutingModule,
    TodoInputFieldContainerModule,
    TodoCountContainerModule,
    TodoListContainerModule,
  ],
})
export class TodoOverviewPageModule {}
