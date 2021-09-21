import { TestBed } from '@angular/core/testing';

import { DistribucionRedService } from './distribucion-red.service';

describe('DistribucionRedService', () => {
  let service: DistribucionRedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistribucionRedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
