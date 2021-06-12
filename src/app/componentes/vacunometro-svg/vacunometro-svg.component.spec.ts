import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunometroSvgComponent } from './vacunometro-svg.component';

describe('VacunometroSvgComponent', () => {
  let component: VacunometroSvgComponent;
  let fixture: ComponentFixture<VacunometroSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunometroSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunometroSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
