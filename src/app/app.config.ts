import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { TodoEffects } from './root-store/store-todo/effects/todo.effects';
import { todoFeatureKey, todoStoreFeature } from './root-store/store-todo/reducers/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideRouter(routes),
    provideStore(),
    provideState(todoFeatureKey, todoStoreFeature.reducer),
    provideEffects([TodoEffects]),
    provideRouterStore(),
  ],
};
