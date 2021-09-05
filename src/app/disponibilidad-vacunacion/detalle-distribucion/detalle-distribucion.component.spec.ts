import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDistribucionComponent } from './detalle-distribucion.component';

describe('DetalleDistribucionComponent', () => {
  let component: DetalleDistribucionComponent;
  let fixture: ComponentFixture<DetalleDistribucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDistribucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
