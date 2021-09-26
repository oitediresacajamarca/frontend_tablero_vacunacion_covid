import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionEstrategiaRedComponent } from './distribucion-estrategia-red.component';

describe('DistribucionEstrategiaRedComponent', () => {
  let component: DistribucionEstrategiaRedComponent;
  let fixture: ComponentFixture<DistribucionEstrategiaRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionEstrategiaRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionEstrategiaRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
