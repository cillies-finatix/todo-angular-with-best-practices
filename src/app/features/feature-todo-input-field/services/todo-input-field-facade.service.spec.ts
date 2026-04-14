import { TestBed } from '@angular/core/testing';
import { TodoInputFieldFacadeService } from './todo-input-field-facade.service';
import { provideTodoMockStore } from '../../../../test/ngrx-todo-mock-store';

describe('TodoInputFieldFacadeService', () => {
  let service: TodoInputFieldFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideTodoMockStore()],
    });
    service = TestBed.inject(TodoInputFieldFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
