import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputFieldContainerComponent } from './todo-input-field-container.component';

describe('TodoInputFieldContainerComponent', () => {
  let component: TodoInputFieldContainerComponent;
  let fixture: ComponentFixture<TodoInputFieldContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputFieldContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputFieldContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
