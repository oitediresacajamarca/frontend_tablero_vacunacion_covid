import { TestBed } from '@angular/core/testing';

import { MicroRedService } from './micro-red.service';

describe('MicroRedService', () => {
  let service: MicroRedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroRedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
