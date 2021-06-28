import { TestBed } from '@angular/core/testing';

import { CuboCoberturasService } from './cubo-coberturas.service';

describe('CuboCoberturasService', () => {
  let service: CuboCoberturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuboCoberturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
