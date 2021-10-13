import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteStockDetalleComponent } from './reporte-stock-detalle.component';

describe('ReporteStockDetalleComponent', () => {
  let component: ReporteStockDetalleComponent;
  let fixture: ComponentFixture<ReporteStockDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteStockDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteStockDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
