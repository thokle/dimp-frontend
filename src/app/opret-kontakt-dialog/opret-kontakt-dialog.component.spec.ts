import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpretKontaktDialogComponent } from './opret-kontakt-dialog.component';

describe('OpretKontaktDialogComponent', () => {
  let component: OpretKontaktDialogComponent;
  let fixture: ComponentFixture<OpretKontaktDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpretKontaktDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpretKontaktDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
