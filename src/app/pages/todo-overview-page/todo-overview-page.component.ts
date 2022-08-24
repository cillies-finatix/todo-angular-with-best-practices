import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-overview-page',
  templateUrl: './todo-overview-page.component.html',
  styleUrls: ['./todo-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoOverviewPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
