import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontakterComponent } from './kontakter.component';

describe('KontakterComponent', () => {
  let component: KontakterComponent;
  let fixture: ComponentFixture<KontakterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontakterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontakterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
