import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiaVacunacionSelectorComponent } from './estrategia-vacunacion-selector.component';

describe('EstrategiaVacunacionSelectorComponent', () => {
  let component: EstrategiaVacunacionSelectorComponent;
  let fixture: ComponentFixture<EstrategiaVacunacionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrategiaVacunacionSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategiaVacunacionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
