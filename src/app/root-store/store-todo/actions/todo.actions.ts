import { createAction, props } from '@ngrx/store';

import { Todo } from '../reducers/todo.reducer';

export const loadTodos = createAction('[Todo API] Load Todos');
export const noop = createAction('[Todo State] No operation');

export const loadTodosSuccess = createAction(
  '[Todo API] Load Todos Success',
  props<{ data: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo API] Load Todos Failure',
  props<{ error: any }>()
);
