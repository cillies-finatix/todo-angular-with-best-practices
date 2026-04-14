import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/root-store/store-todo/reducers/todo.reducer';

import { TodoListFacadeService } from '../services/todo-list-facade.service';

@Component({
    selector: 'app-todo-list-container',
    templateUrl: './todo-list-container.component.html',
    styleUrls: ['./todo-list-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [AsyncPipe, LetDirective],
})
export class TodoListContainerComponent implements OnInit {
  items$: Observable<Todo[]> = this.facade.items$;

  constructor(private readonly facade: TodoListFacadeService) {}

  ngOnInit(): void {}
}
