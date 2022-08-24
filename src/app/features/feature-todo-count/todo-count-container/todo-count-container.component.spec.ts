import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCountContainerComponent } from './todo-count-container.component';

describe('TodoCountContainerComponent', () => {
  let component: TodoCountContainerComponent;
  let fixture: ComponentFixture<TodoCountContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCountContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCountContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
