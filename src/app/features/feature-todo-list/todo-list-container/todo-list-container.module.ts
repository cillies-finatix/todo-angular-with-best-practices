import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LetModule } from '@ngrx/component';

import { TodoListContainerComponent } from './todo-list-container.component';

@NgModule({
  declarations: [TodoListContainerComponent],
  imports: [CommonModule, LetModule],
  exports: [TodoListContainerComponent],
})
export class TodoListContainerModule {}
