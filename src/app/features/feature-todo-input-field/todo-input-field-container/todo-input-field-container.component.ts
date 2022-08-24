import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TodoInputFieldFacadeService } from '../services/todo-input-field-facade.service';

@Component({
  selector: 'app-todo-input-field-container',
  templateUrl: './todo-input-field-container.component.html',
  styleUrls: ['./todo-input-field-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputFieldContainerComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private readonly facade: TodoInputFieldFacadeService) {
    this.todoForm = new FormGroup({
      todoName: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.facade.todoInputFormSubmitted(this.todoForm.value.todoName);
    this.todoForm.reset();
  }
}
