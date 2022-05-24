import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoVacunacionComponent } from './seguimiento-vacunacion.component';

describe('SeguimientoVacunacionComponent', () => {
  let component: SeguimientoVacunacionComponent;
  let fixture: ComponentFixture<SeguimientoVacunacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoVacunacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
