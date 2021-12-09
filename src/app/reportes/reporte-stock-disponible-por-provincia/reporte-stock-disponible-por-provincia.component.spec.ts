import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteStockDisponiblePorProvinciaComponent } from './reporte-stock-disponible-por-provincia.component';

describe('ReporteStockDisponiblePorProvinciaComponent', () => {
  let component: ReporteStockDisponiblePorProvinciaComponent;
  let fixture: ComponentFixture<ReporteStockDisponiblePorProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteStockDisponiblePorProvinciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteStockDisponiblePorProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
