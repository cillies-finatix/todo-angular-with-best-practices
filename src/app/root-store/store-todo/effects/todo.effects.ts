import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as TodoActions from '../actions/todo.actions';

const TODOS_KEY = 'todos';

export const LOCAL_STORAGE_TOKEN = new InjectionToken<Storage>(
  'localstorage ref',
  {
    factory: () => window.localStorage,
  }
);

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      map(() => {
        const localStorageData = this.localStorage.getItem(TODOS_KEY);
        if (localStorageData) {
          try {
            const data = JSON.parse(localStorageData);
            return TodoActions.loadTodosSuccess({ data });
          } catch (error) {
            return TodoActions.loadTodosFailure({ error });
          }
        }
        return TodoActions.noop();
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    @Inject(LOCAL_STORAGE_TOKEN) private readonly localStorage: Storage
  ) {}
}
