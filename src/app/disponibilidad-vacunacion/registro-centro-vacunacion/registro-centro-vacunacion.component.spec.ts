import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCentroVacunacionComponent } from './registro-centro-vacunacion.component';

describe('RegistroCentroVacunacionComponent', () => {
  let component: RegistroCentroVacunacionComponent;
  let fixture: ComponentFixture<RegistroCentroVacunacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCentroVacunacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCentroVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
