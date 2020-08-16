import { TestBed } from '@angular/core/testing';

import { NewPriserService } from './new-priser.service';

describe('NewPriserService', () => {
  let service: NewPriserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPriserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
