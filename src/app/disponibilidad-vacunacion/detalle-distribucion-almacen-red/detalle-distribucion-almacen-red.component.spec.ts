import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDistribucionAlmacenRedComponent } from './detalle-distribucion-almacen-red.component';

describe('DetalleDistribucionAlmacenRedComponent', () => {
  let component: DetalleDistribucionAlmacenRedComponent;
  let fixture: ComponentFixture<DetalleDistribucionAlmacenRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDistribucionAlmacenRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDistribucionAlmacenRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
