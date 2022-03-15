import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteoRapidoNhisComponent } from './conteo-rapido-nhis.component';

describe('ConteoRapidoNhisComponent', () => {
  let component: ConteoRapidoNhisComponent;
  let fixture: ComponentFixture<ConteoRapidoNhisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteoRapidoNhisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteoRapidoNhisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
