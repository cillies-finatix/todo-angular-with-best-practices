import { TestBed } from '@angular/core/testing';

import { TodoInputFieldFacadeService } from './todo-input-field-facade.service';

describe('TodoInputFieldFacadeService', () => {
  let service: TodoInputFieldFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoInputFieldFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
