import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoCountContainerComponent } from './todo-count-container.component';
import { provideTodoMockStore } from '../../../../test/ngrx-todo-mock-store';

describe('TodoCountContainerComponent', () => {
  let component: TodoCountContainerComponent;
  let fixture: ComponentFixture<TodoCountContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCountContainerComponent],
      providers: [provideTodoMockStore()],
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
