import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSelectorComponent } from './red-selector.component';

describe('RedSelectorComponent', () => {
  let component: RedSelectorComponent;
  let fixture: ComponentFixture<RedSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
