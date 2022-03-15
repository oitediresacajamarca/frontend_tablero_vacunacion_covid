import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDistribucionAlmacenRedSismedComponent } from './editar-distribucion-almacen-red-sismed.component';

describe('EditarDistribucionAlmacenRedSismedComponent', () => {
  let component: EditarDistribucionAlmacenRedSismedComponent;
  let fixture: ComponentFixture<EditarDistribucionAlmacenRedSismedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDistribucionAlmacenRedSismedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDistribucionAlmacenRedSismedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
