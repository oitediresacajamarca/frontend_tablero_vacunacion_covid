import { TestBed } from '@angular/core/testing';

import { DitribucionMicroredIpressService } from './ditribucion-microred-ipress.service';

describe('DitribucionMicroredIpressService', () => {
  let service: DitribucionMicroredIpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DitribucionMicroredIpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
