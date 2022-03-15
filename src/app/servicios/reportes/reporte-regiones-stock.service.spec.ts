import { TestBed } from '@angular/core/testing';

import { ReporteRegionesStockService } from './reporte-regiones-stock.service';

describe('ReporteRegionesStockService', () => {
  let service: ReporteRegionesStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteRegionesStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
