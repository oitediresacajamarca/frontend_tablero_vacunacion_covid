import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRegistroCentroVacunacionComponent } from './detalle-registro-centro-vacunacion.component';

describe('DetalleRegistroCentroVacunacionComponent', () => {
  let component: DetalleRegistroCentroVacunacionComponent;
  let fixture: ComponentFixture<DetalleRegistroCentroVacunacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRegistroCentroVacunacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRegistroCentroVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
