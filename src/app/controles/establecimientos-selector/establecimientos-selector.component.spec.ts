import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecimientosSelectorComponent } from './establecimientos-selector.component';

describe('EstablecimientosSelectorComponent', () => {
  let component: EstablecimientosSelectorComponent;
  let fixture: ComponentFixture<EstablecimientosSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablecimientosSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecimientosSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
