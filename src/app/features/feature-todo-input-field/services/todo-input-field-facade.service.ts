import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { todoInputFormSubmitted } from '../actions/todo-input-field.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoInputFieldFacadeService {
  constructor(private readonly store: Store) {}

  todoInputFormSubmitted(title: string): void {
    this.store.dispatch(todoInputFormSubmitted({ title }));
  }
}
