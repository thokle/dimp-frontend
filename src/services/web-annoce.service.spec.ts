import { TestBed } from '@angular/core/testing';

import { WebAnnoceService } from './web-annoce.service';

describe('WebAnnoceService', () => {
  let service: WebAnnoceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebAnnoceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
