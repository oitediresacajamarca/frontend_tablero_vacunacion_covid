import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroComparacionAlmacenRedComponent } from './cuadro-comparacion-almacen-red.component';

describe('CuadroComparacionAlmacenRedComponent', () => {
  let component: CuadroComparacionAlmacenRedComponent;
  let fixture: ComponentFixture<CuadroComparacionAlmacenRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroComparacionAlmacenRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroComparacionAlmacenRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
