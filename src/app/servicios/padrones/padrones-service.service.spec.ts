import { TestBed } from '@angular/core/testing';

import { PadronesServiceService } from './padrones-service.service';

describe('PadronesServiceService', () => {
  let service: PadronesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadronesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
