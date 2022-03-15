import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosProblemasDigitacionComponent } from './casos-problemas-digitacion.component';

describe('CasosProblemasDigitacionComponent', () => {
  let component: CasosProblemasDigitacionComponent;
  let fixture: ComponentFixture<CasosProblemasDigitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasosProblemasDigitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosProblemasDigitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
