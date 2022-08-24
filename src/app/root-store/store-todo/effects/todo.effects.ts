import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map, tap } from 'rxjs/operators';
import { selectTodos } from 'src/app/root-store/store-todo/selectors/todo.selectors';

import * as AppComponentActions from '../../../app.actions';
import * as TodoInputFieldActions from '../../../features/feature-todo-input-field/actions/todo-input-field.actions';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../reducers/todo.reducer';

const TODOS_KEY = 'todos';

const encode = <T>(arg: T) => JSON.stringify(arg);
const decode = <T>(arg: string) => JSON.parse(arg) as T;

export const LOCAL_STORAGE_TOKEN = new InjectionToken<Storage>(
  'localstorage ref',
  {
    factory: () => window.localStorage,
  }
);

@Injectable()
export class TodoEffects {
  appComponentInitialized$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppComponentActions.appComponentInitialized),
      map(() => TodoActions.loadTodos())
    );
  });

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      map(() => {
        const localStorageData = this.localStorage.getItem(TODOS_KEY);
        if (localStorageData) {
          try {
            const data = decode<Todo[]>(localStorageData);
            return TodoActions.loadTodosSuccess({ data });
          } catch (error) {
            return TodoActions.loadTodosFailure({ error });
          }
        }
        return TodoActions.noop();
      })
    );
  });

  addedTodo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          TodoActions.createTodo,
          TodoInputFieldActions.todoInputFormSubmitted
        ),
        concatMap(() => this.store.select(selectTodos)),
        tap((currentTodos) => {
          this.localStorage.setItem(TODOS_KEY, encode(currentTodos));
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    @Inject(LOCAL_STORAGE_TOKEN) private readonly localStorage: Storage
  ) {}
}
