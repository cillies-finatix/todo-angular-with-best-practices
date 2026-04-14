import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListContainerComponent } from './todo-list-container.component';
import { provideTodoMockStore } from '../../../../test/ngrx-todo-mock-store';

describe('TodoListContainerComponent', () => {
  let component: TodoListContainerComponent;
  let fixture: ComponentFixture<TodoListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListContainerComponent],
      providers: [provideTodoMockStore()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
