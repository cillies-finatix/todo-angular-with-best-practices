import { TestBed } from '@angular/core/testing';
import { TodoCountFacadeService } from './todo-count-facade.service';
import { provideTodoMockStore } from '../../../../test/ngrx-todo-mock-store';

describe('TodoCountFacadeService', () => {
  let service: TodoCountFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideTodoMockStore()],
    });
    service = TestBed.inject(TodoCountFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
