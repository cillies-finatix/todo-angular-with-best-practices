import { TestBed } from '@angular/core/testing';
import { TodoListFacadeService } from './todo-list-facade.service';
import { provideTodoMockStore } from '../../../../test/ngrx-todo-mock-store';

describe('TodoListFacadeService', () => {
  let service: TodoListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideTodoMockStore()],
    });
    service = TestBed.inject(TodoListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
