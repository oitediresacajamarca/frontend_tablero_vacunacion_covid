import { TestBed } from '@angular/core/testing';

import { EnviosRedService } from './envios-red.service';

describe('EnviosRedService', () => {
  let service: EnviosRedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviosRedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
