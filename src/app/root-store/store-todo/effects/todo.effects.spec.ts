import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { provideTodoMockStore } from '../../../../test/ngrx-todo-mock-store';
import { TodoEffects } from './todo.effects';

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        provideTodoMockStore(),
      ]
    });

    effects = TestBed.inject(TodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
