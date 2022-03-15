import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDistribucionAlmacenRedSismedComponent } from './detalle-distribucion-almacen-red-sismed.component';

describe('DetalleDistribucionAlmacenRedSismedComponent', () => {
  let component: DetalleDistribucionAlmacenRedSismedComponent;
  let fixture: ComponentFixture<DetalleDistribucionAlmacenRedSismedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDistribucionAlmacenRedSismedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDistribucionAlmacenRedSismedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
