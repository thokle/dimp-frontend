import { TestBed } from '@angular/core/testing';

import { Load2Guard } from './load2.guard';

describe('Load2Guard', () => {
  let guard: Load2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Load2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
