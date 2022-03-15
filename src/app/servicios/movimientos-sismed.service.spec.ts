import { TestBed } from '@angular/core/testing';

import { MovimientosSismedService } from './movimientos-sismed.service';

describe('MovimientosSismedService', () => {
  let service: MovimientosSismedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientosSismedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
