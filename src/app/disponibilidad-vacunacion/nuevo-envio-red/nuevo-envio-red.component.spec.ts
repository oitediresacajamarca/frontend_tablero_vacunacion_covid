import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnvioRedComponent } from './nuevo-envio-red.component';

describe('NuevoEnvioRedComponent', () => {
  let component: NuevoEnvioRedComponent;
  let fixture: ComponentFixture<NuevoEnvioRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEnvioRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEnvioRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
