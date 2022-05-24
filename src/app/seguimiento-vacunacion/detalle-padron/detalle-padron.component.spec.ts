import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePadronComponent } from './detalle-padron.component';

describe('DetallePadronComponent', () => {
  let component: DetallePadronComponent;
  let fixture: ComponentFixture<DetallePadronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePadronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePadronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
