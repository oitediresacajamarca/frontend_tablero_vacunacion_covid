import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEnvioIpressComponent } from './detalle-envio-ipress.component';

describe('DetalleEnvioIpressComponent', () => {
  let component: DetalleEnvioIpressComponent;
  let fixture: ComponentFixture<DetalleEnvioIpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEnvioIpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEnvioIpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
