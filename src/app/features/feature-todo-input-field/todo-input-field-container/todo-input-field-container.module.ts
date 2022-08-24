import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoInputFieldContainerComponent } from './todo-input-field-container.component';

@NgModule({
  declarations: [TodoInputFieldContainerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoInputFieldContainerComponent],
})
export class TodoInputFieldContainerModule {}
