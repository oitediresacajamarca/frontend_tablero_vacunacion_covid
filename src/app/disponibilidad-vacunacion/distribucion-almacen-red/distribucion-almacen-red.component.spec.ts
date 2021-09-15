import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionAlmacenRedComponent } from './distribucion-almacen-red.component';

describe('DistribucionAlmacenRedComponent', () => {
  let component: DistribucionAlmacenRedComponent;
  let fixture: ComponentFixture<DistribucionAlmacenRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionAlmacenRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionAlmacenRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
