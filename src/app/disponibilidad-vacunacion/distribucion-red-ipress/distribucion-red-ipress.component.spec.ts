import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionRedIpressComponent } from './distribucion-red-ipress.component';

describe('DistribucionRedIpressComponent', () => {
  let component: DistribucionRedIpressComponent;
  let fixture: ComponentFixture<DistribucionRedIpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionRedIpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionRedIpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
