import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCountContainerComponent } from './todo-count-container.component';



@NgModule({
  declarations: [
    TodoCountContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoCountContainerComponent
  ]
})
export class TodoCountContainerModule { }
