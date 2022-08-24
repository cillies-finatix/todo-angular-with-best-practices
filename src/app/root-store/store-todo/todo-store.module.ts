import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoEffects } from './effects/todo.effects';
import * as fromTodo from './reducers/todo.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTodo.todoFeatureKey,
      fromTodo.todoStoreFeature.reducer
    ),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoStoreModule {}
