import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCabeceraRegionalComponent } from './reporte-cabecera-regional.component';

describe('ReporteCabeceraRegionalComponent', () => {
  let component: ReporteCabeceraRegionalComponent;
  let fixture: ComponentFixture<ReporteCabeceraRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCabeceraRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCabeceraRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
