import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoSelectorComponent } from './distrito-selector.component';

describe('DistritoSelectorComponent', () => {
  let component: DistritoSelectorComponent;
  let fixture: ComponentFixture<DistritoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistritoSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
