import { TestBed } from '@angular/core/testing';

import { StockIpressService } from './stock-ipress.service';

describe('StockIpressService', () => {
  let service: StockIpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockIpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
