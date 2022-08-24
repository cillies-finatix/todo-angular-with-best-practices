import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/root-store/store-todo/reducers/todo.reducer';
import { selectTodos } from 'src/app/root-store/store-todo/selectors/todo.selectors';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss'],
})
export class TodoListContainerComponent implements OnInit {
  items$: Observable<Todo[]>;

  constructor(private readonly store: Store) {
    this.items$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {}
}
