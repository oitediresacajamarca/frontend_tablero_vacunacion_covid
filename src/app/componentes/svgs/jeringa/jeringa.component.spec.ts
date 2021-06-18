import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeringaComponent } from './jeringa.component';

describe('JeringaComponent', () => {
  let component: JeringaComponent;
  let fixture: ComponentFixture<JeringaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeringaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeringaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
