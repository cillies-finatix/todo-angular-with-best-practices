import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TodoCountContainerComponent } from '../../features/feature-todo-count/todo-count-container/todo-count-container.component';
import { TodoInputFieldContainerComponent } from '../../features/feature-todo-input-field/todo-input-field-container/todo-input-field-container.component';
import { TodoListContainerComponent } from '../../features/feature-todo-list/todo-list-container/todo-list-container.component';

@Component({
    selector: 'app-todo-overview-page',
    templateUrl: './todo-overview-page.component.html',
    styleUrls: ['./todo-overview-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
      TodoInputFieldContainerComponent,
      TodoCountContainerComponent,
      TodoListContainerComponent,
    ]
})
export class TodoOverviewPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
