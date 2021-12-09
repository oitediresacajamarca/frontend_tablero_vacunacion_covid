import { TestBed } from '@angular/core/testing';

import { ResgistrosCentrosService } from './resgistros-centros.service';

describe('ResgistrosCentrosService', () => {
  let service: ResgistrosCentrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResgistrosCentrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
