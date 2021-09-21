import { TestBed } from '@angular/core/testing';

import { EnviosIpressService } from './envios-ipress.service';

describe('EnviosIpressService', () => {
  let service: EnviosIpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviosIpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
