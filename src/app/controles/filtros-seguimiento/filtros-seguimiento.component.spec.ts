import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosSeguimientoComponent } from './filtros-seguimiento.component';

describe('FiltrosSeguimientoComponent', () => {
  let component: FiltrosSeguimientoComponent;
  let fixture: ComponentFixture<FiltrosSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosSeguimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
