import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionAnexosDetalleComponent } from './recepcion-anexos-detalle.component';

describe('RecepcionAnexosDetalleComponent', () => {
  let component: RecepcionAnexosDetalleComponent;
  let fixture: ComponentFixture<RecepcionAnexosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcionAnexosDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionAnexosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
