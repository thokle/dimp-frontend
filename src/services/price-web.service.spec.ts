import { TestBed } from '@angular/core/testing';

import { PriceWebService } from './price-web.service';

describe('PriceWebService', () => {
  let service: PriceWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
