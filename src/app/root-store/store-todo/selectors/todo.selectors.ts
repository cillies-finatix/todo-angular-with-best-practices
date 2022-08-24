import { createSelector } from '@ngrx/store';

import * as fromTodo from '../reducers/todo.reducer';

/*
export const selectTodoState = createFeatureSelector<fromTodo.State>(
  fromTodo.todoFeatureKey
); /* */

export const { selectTodoState, selectTodos } = fromTodo.todoStoreFeature;

export const selectTodosCount = createSelector(
  selectTodos,
  (todos) => todos.length
);
