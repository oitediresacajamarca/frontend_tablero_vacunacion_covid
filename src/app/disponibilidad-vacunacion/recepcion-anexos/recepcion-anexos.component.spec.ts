import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionAnexosComponent } from './recepcion-anexos.component';

describe('RecepcionAnexosComponent', () => {
  let component: RecepcionAnexosComponent;
  let fixture: ComponentFixture<RecepcionAnexosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcionAnexosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionAnexosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
