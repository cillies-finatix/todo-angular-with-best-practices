import { createFeature, createReducer, on } from '@ngrx/store';

import * as TodoActions from '../actions/todo.actions';

export const todoFeatureKey = 'todo';

export interface Todo {
  title: string;
  done: boolean;
  updatedAt: string;
  createdAt: string;
}

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [],
};

export const reducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, (state) => state),
  on(TodoActions.loadTodosSuccess, (state, action) => ({
    ...state,
    todos: action.data,
  })),
  on(TodoActions.loadTodosFailure, (state, action) => ({ ...state, todos: [] }))
);

/* Generates basic selectors */
export const todoStoreFeature = createFeature({
  name: todoFeatureKey,
  reducer,
});
