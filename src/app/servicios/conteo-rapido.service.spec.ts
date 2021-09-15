import { TestBed } from '@angular/core/testing';

import { ConteoRapidoService } from './conteo-rapido.service';

describe('ConteoRapidoService', () => {
  let service: ConteoRapidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteoRapidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
