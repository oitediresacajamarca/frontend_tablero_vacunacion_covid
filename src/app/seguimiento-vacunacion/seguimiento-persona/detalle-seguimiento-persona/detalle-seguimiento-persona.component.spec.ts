import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSeguimientoPersonaComponent } from './detalle-seguimiento-persona.component';

describe('DetalleSeguimientoPersonaComponent', () => {
  let component: DetalleSeguimientoPersonaComponent;
  let fixture: ComponentFixture<DetalleSeguimientoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSeguimientoPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSeguimientoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
