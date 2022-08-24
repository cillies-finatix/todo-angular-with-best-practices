import { createFeature, createReducer, on } from '@ngrx/store';

import * as TodoInputFieldActions from '../../../features/feature-todo-input-field/actions/todo-input-field.actions';
import * as TodoActions from '../actions/todo.actions';

export const todoFeatureKey = 'todo';

export interface Todo {
  title: string;
  done: boolean;
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
  on(
    TodoActions.createTodo,
    TodoInputFieldActions.todoInputFormSubmitted,
    (state, action) => ({
      ...state,
      todos: state.todos.concat({
        title: action.title,
        done: false,
      }),
    })
  ),
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
