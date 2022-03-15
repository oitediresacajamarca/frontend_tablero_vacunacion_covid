import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitoSelectorComponent } from './ambito-selector.component';

describe('AmbitoSelectorComponent', () => {
  let component: AmbitoSelectorComponent;
  let fixture: ComponentFixture<AmbitoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbitoSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
