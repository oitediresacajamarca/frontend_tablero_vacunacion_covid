import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpressSelectorComponent } from './ipress-selector.component';

describe('IpressSelectorComponent', () => {
  let component: IpressSelectorComponent;
  let fixture: ComponentFixture<IpressSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpressSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpressSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
