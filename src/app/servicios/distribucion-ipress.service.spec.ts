import { TestBed } from '@angular/core/testing';

import { DistribucionIpressService } from './distribucion-ipress.service';

describe('DistribucionIpressService', () => {
  let service: DistribucionIpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistribucionIpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
