import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionAlmacenEspecialComponent } from './recepcion-almacen-especial.component';

describe('RecepcionAlmacenEspecialComponent', () => {
  let component: RecepcionAlmacenEspecialComponent;
  let fixture: ComponentFixture<RecepcionAlmacenEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcionAlmacenEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionAlmacenEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
