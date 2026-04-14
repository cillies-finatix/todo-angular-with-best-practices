import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoInputFieldContainerComponent } from './todo-input-field-container.component';
import { provideTodoMockStore } from '../../../../test/ngrx-todo-mock-store';

describe('TodoInputFieldContainerComponent', () => {
  let component: TodoInputFieldContainerComponent;
  let fixture: ComponentFixture<TodoInputFieldContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoInputFieldContainerComponent],
      providers: [provideTodoMockStore()],
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
