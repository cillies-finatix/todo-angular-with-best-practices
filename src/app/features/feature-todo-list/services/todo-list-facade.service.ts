import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/root-store/store-todo/reducers/todo.reducer';
import { selectTodos } from 'src/app/root-store/store-todo/selectors/todo.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodoListFacadeService {
  items$: Observable<Todo[]> = this.store.select(selectTodos);
  constructor(private readonly store: Store) {}
}
