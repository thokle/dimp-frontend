import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadLine2Component } from './dead-line2.component';

describe('DeadLine2Component', () => {
  let component: DeadLine2Component;
  let fixture: ComponentFixture<DeadLine2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadLine2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadLine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
