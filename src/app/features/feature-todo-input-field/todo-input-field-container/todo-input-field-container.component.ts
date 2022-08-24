import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { todoInputFormSubmitted } from '../actions/todo-input-field.actions';

@Component({
  selector: 'app-todo-input-field-container',
  templateUrl: './todo-input-field-container.component.html',
  styleUrls: ['./todo-input-field-container.component.scss'],
})
export class TodoInputFieldContainerComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private readonly store: Store) {
    this.todoForm = new FormGroup({
      todoName: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.store.dispatch(
      todoInputFormSubmitted({ title: this.todoForm.value.todoName })
    );

    this.todoForm.reset();
  }
}
