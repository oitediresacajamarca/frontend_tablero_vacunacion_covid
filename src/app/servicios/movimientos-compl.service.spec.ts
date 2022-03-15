import { TestBed } from '@angular/core/testing';

import { MovimientosComplService } from './movimientos-compl.service';

describe('MovimientosComplService', () => {
  let service: MovimientosComplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientosComplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
