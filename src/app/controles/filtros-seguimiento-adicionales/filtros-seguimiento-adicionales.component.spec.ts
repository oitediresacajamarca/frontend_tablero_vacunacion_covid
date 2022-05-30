import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosSeguimientoAdicionalesComponent } from './filtros-seguimiento-adicionales.component';

describe('FiltrosSeguimientoAdicionalesComponent', () => {
  let component: FiltrosSeguimientoAdicionalesComponent;
  let fixture: ComponentFixture<FiltrosSeguimientoAdicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosSeguimientoAdicionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosSeguimientoAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
