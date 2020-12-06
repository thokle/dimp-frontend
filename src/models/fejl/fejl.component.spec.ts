import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FejlComponent } from './fejl.component';

describe('FejlComponent', () => {
  let component: FejlComponent;
  let fixture: ComponentFixture<FejlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FejlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FejlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
