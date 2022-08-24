import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import * as TodoActions from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      concatMap(() => {
        return EMPTY.pipe(
          map((data) => TodoActions.loadTodosSuccess({ data })),
          catchError((error) => of(TodoActions.loadTodosFailure({ error })))
        );
      })
    );
  });

  constructor(private actions$: Actions) {}
}
