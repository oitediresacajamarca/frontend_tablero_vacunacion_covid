import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroredSelectorComponent } from './microred-selector.component';

describe('MicroredSelectorComponent', () => {
  let component: MicroredSelectorComponent;
  let fixture: ComponentFixture<MicroredSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroredSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroredSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
