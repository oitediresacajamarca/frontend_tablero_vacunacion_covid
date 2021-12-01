import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEnvioIpressIpressComponent } from './detalle-envio-ipress-ipress.component';

describe('DetalleEnvioIpressIpressComponent', () => {
  let component: DetalleEnvioIpressIpressComponent;
  let fixture: ComponentFixture<DetalleEnvioIpressIpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEnvioIpressIpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEnvioIpressIpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
