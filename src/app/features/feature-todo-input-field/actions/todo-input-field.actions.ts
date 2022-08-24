import { createAction, props } from '@ngrx/store';

export const todoInputFormSubmitted = createAction(
  '[Todo Input Field Container] Form submitted',
  props<{ title: string }>()
);
