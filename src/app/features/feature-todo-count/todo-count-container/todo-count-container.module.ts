import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountItemModule } from '../../../shared/modules/count-item/count-item.module';
import { TodoCountContainerComponent } from './todo-count-container.component';

@NgModule({
  declarations: [TodoCountContainerComponent],
  imports: [CommonModule, CountItemModule],
  exports: [TodoCountContainerComponent],
})
export class TodoCountContainerModule {}
