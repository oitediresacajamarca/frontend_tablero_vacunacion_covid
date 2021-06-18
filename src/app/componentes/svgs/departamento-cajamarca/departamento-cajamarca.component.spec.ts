import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoCajamarcaComponent } from './departamento-cajamarca.component';

describe('DepartamentoCajamarcaComponent', () => {
  let component: DepartamentoCajamarcaComponent;
  let fixture: ComponentFixture<DepartamentoCajamarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoCajamarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoCajamarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
