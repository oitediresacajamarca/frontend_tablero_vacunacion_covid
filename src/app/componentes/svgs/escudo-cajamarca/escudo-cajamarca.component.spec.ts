import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscudoCajamarcaComponent } from './escudo-cajamarca.component';

describe('EscudoCajamarcaComponent', () => {
  let component: EscudoCajamarcaComponent;
  let fixture: ComponentFixture<EscudoCajamarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscudoCajamarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscudoCajamarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
