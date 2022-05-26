import { TestBed } from '@angular/core/testing';

import { SeguimientoServiceService } from './seguimiento-service.service';

describe('SeguimientoServiceService', () => {
  let service: SeguimientoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguimientoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
