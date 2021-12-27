import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRegistroCentroVacunacionComponent } from './modificar-registro-centro-vacunacion.component';

describe('ModificarRegistroCentroVacunacionComponent', () => {
  let component: ModificarRegistroCentroVacunacionComponent;
  let fixture: ComponentFixture<ModificarRegistroCentroVacunacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRegistroCentroVacunacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRegistroCentroVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
