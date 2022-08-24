import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { appComponentInitialized } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo-angular-with-best-practices';

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(appComponentInitialized());
  }
}
