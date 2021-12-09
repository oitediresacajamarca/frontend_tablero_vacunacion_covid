import { TestBed } from '@angular/core/testing';

import { CentroVacunacionService } from './centro-vacunacion.service';

describe('CentroVacunacionService', () => {
  let service: CentroVacunacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroVacunacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
