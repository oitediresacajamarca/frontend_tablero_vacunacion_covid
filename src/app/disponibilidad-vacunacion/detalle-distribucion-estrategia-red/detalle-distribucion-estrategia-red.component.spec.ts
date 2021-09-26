import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDistribucionEstrategiaRedComponent } from './detalle-distribucion-estrategia-red.component';

describe('DetalleDistribucionEstrategiaRedComponent', () => {
  let component: DetalleDistribucionEstrategiaRedComponent;
  let fixture: ComponentFixture<DetalleDistribucionEstrategiaRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDistribucionEstrategiaRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDistribucionEstrategiaRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
