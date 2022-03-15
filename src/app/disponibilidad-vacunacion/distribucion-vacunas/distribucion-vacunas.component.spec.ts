import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionVacunasComponent } from './distribucion-vacunas.component';

describe('DistribucionVacunasComponent', () => {
  let component: DistribucionVacunasComponent;
  let fixture: ComponentFixture<DistribucionVacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionVacunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
