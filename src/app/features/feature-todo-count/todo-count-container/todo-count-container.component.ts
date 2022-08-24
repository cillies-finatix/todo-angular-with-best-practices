import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoCountFacadeService } from '../services/todo-count-facade.service';

@Component({
  selector: 'app-todo-count-container',
  templateUrl: './todo-count-container.component.html',
  styleUrls: ['./todo-count-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCountContainerComponent implements OnInit {
  count$: Observable<number> = this.facade.count$;
  constructor(private readonly facade: TodoCountFacadeService) {}
  ngOnInit(): void {}
}
