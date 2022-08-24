import { TestBed } from '@angular/core/testing';

import { TodoCountApiService } from './todo-count-api.service';

describe('TodoCountApiService', () => {
  let service: TodoCountApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoCountApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
