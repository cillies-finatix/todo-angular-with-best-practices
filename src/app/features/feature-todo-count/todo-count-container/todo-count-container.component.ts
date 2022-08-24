import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodosCount } from 'src/app/root-store/store-todo/selectors/todo.selectors';

@Component({
  selector: 'app-todo-count-container',
  templateUrl: './todo-count-container.component.html',
  styleUrls: ['./todo-count-container.component.scss'],
})
export class TodoCountContainerComponent implements OnInit {
  count$: Observable<number>;

  constructor(private readonly store: Store) {
    this.count$ = this.store.select(selectTodosCount);
  }

  ngOnInit(): void {}
}
