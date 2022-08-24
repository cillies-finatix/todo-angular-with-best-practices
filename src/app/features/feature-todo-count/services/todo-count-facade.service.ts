import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodosCount } from 'src/app/root-store/store-todo/selectors/todo.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodoCountFacadeService {
  count$: Observable<number> = this.store.select(selectTodosCount);
  constructor(private readonly store: Store) {}
}
