import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceKontrolComponent } from './annonce-kontrol.component';

describe('AnnonceKontrolComponent', () => {
  let component: AnnonceKontrolComponent;
  let fixture: ComponentFixture<AnnonceKontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceKontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceKontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
