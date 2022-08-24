import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountItemComponent } from './count-item.component';



@NgModule({
  declarations: [
    CountItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountItemComponent
  ]
})
export class CountItemModule { }
