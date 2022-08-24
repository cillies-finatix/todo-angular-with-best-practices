import { TestBed } from '@angular/core/testing';

import { TodoCountFacadeService } from './todo-count-facade.service';

describe('TodoCountFacadeService', () => {
  let service: TodoCountFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoCountFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
