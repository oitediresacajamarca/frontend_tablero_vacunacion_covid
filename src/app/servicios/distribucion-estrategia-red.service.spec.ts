import { TestBed } from '@angular/core/testing';

import { DistribucionEstrategiaRedService } from './distribucion-estrategia-red.service';

describe('DistribucionEstrategiaRedService', () => {
  let service: DistribucionEstrategiaRedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistribucionEstrategiaRedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
