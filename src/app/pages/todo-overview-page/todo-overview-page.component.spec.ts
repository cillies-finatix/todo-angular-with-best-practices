import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoInputFieldContainerComponent } from '../../features/feature-todo-input-field/todo-input-field-container/todo-input-field-container.component';
import { TodoCountContainerComponent } from '../../features/feature-todo-count/todo-count-container/todo-count-container.component';
import { TodoListContainerComponent } from '../../features/feature-todo-list/todo-list-container/todo-list-container.component';
import { TodoOverviewPageComponent } from './todo-overview-page.component';
import { provideTodoMockStore } from '../../../test/ngrx-todo-mock-store';

describe('TodoOverviewPageComponent', () => {
  let component: TodoOverviewPageComponent;
  let fixture: ComponentFixture<TodoOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TodoOverviewPageComponent,
        TodoInputFieldContainerComponent,
        TodoCountContainerComponent,
        TodoListContainerComponent,
      ],
      providers: [provideTodoMockStore()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
