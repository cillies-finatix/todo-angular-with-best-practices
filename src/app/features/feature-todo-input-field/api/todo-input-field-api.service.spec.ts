import { TestBed } from '@angular/core/testing';

import { TodoInputFieldApiService } from './todo-input-field-api.service';

describe('TodoInputFieldApiService', () => {
  let service: TodoInputFieldApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoInputFieldApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
