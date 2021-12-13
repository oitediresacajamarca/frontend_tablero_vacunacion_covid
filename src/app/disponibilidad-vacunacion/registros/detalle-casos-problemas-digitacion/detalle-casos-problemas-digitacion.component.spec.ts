import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCasosProblemasDigitacionComponent } from './detalle-casos-problemas-digitacion.component';

describe('DetalleCasosProblemasDigitacionComponent', () => {
  let component: DetalleCasosProblemasDigitacionComponent;
  let fixture: ComponentFixture<DetalleCasosProblemasDigitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCasosProblemasDigitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCasosProblemasDigitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
