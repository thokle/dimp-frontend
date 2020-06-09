import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriserComponent } from './priser.component';

describe('PriserComponent', () => {
  let component: PriserComponent;
  let fixture: ComponentFixture<PriserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
