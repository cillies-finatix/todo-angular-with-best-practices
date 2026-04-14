import { provideMockStore } from '@ngrx/store/testing';

import { initialState, todoFeatureKey } from '../app/root-store/store-todo/reducers/todo.reducer';

/** Mock Store with the todo feature slice initialized (avoids selector errors in component tests). */
export const provideTodoMockStore = () =>
  provideMockStore({
    initialState: {
      [todoFeatureKey]: initialState,
    },
  });
