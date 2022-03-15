import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaSelectorComponent } from './provincia-selector.component';

describe('ProvinciaSelectorComponent', () => {
  let component: ProvinciaSelectorComponent;
  let fixture: ComponentFixture<ProvinciaSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
