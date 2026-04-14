import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { TodoListContainerComponent } from './todo-list-container.component';

@NgModule({
  declarations: [TodoListContainerComponent],
  imports: [CommonModule, LetDirective],
  exports: [TodoListContainerComponent],
})
export class TodoListContainerModule {}
