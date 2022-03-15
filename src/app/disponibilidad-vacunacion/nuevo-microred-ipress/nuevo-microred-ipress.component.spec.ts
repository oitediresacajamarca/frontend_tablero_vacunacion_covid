import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMicroredIpressComponent } from './nuevo-microred-ipress.component';

describe('NuevoMicroredIpressComponent', () => {
  let component: NuevoMicroredIpressComponent;
  let fixture: ComponentFixture<NuevoMicroredIpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoMicroredIpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMicroredIpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
