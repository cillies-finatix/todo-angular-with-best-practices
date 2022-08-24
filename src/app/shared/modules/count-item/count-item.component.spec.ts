import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountItemComponent } from './count-item.component';

describe('CountItemComponent', () => {
  let component: CountItemComponent;
  let fixture: ComponentFixture<CountItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
