import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDistribucionPorIpressComponent } from './detalle-distribucion-por-ipress.component';

describe('DetalleDistribucionPorIpressComponent', () => {
  let component: DetalleDistribucionPorIpressComponent;
  let fixture: ComponentFixture<DetalleDistribucionPorIpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDistribucionPorIpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDistribucionPorIpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
