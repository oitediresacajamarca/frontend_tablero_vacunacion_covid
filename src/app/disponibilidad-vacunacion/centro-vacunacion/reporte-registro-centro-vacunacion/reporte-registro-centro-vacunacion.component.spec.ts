import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRegistroCentroVacunacionComponent } from './reporte-registro-centro-vacunacion.component';

describe('ReporteRegistroCentroVacunacionComponent', () => {
  let component: ReporteRegistroCentroVacunacionComponent;
  let fixture: ComponentFixture<ReporteRegistroCentroVacunacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteRegistroCentroVacunacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteRegistroCentroVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
