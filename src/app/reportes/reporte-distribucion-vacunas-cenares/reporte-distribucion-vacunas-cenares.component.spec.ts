import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDistribucionVacunasCenaresComponent } from './reporte-distribucion-vacunas-cenares.component';

describe('ReporteDistribucionVacunasCenaresComponent', () => {
  let component: ReporteDistribucionVacunasCenaresComponent;
  let fixture: ComponentFixture<ReporteDistribucionVacunasCenaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDistribucionVacunasCenaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDistribucionVacunasCenaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
