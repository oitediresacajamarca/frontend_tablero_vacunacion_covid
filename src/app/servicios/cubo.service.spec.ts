import { TestBed } from '@angular/core/testing';

import { CuboService } from './cubo.service';

describe('CuboService', () => {
  let service: CuboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
