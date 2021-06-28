import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenerdorTableroComponent } from './contenerdor-tablero.component';

describe('ContenerdorTableroComponent', () => {
  let component: ContenerdorTableroComponent;
  let fixture: ComponentFixture<ContenerdorTableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenerdorTableroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenerdorTableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
