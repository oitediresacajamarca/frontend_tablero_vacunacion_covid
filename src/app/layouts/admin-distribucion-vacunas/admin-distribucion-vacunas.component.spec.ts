import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDistribucionVacunasComponent } from './admin-distribucion-vacunas.component';

describe('AdminDistribucionVacunasComponent', () => {
  let component: AdminDistribucionVacunasComponent;
  let fixture: ComponentFixture<AdminDistribucionVacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDistribucionVacunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDistribucionVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
