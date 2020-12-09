import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineEjerforholdComponent } from './deadline-ejerforhold.component';

describe('DeadlineEjerforholdComponent', () => {
  let component: DeadlineEjerforholdComponent;
  let fixture: ComponentFixture<DeadlineEjerforholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadlineEjerforholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlineEjerforholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
