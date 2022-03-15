import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroStockComponent } from './registro-stock.component';

describe('RegistroStockComponent', () => {
  let component: RegistroStockComponent;
  let fixture: ComponentFixture<RegistroStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
