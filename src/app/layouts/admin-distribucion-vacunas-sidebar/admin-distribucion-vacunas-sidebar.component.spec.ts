import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDistribucionVacunasSidebarComponent } from './admin-distribucion-vacunas-sidebar.component';

describe('AdminDistribucionVacunasSidebarComponent', () => {
  let component: AdminDistribucionVacunasSidebarComponent;
  let fixture: ComponentFixture<AdminDistribucionVacunasSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDistribucionVacunasSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDistribucionVacunasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
