import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Venasoft1Component } from './venasoft1.component';

describe('Venasoft1Component', () => {
  let component: Venasoft1Component;
  let fixture: ComponentFixture<Venasoft1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Venasoft1Component]
    });
    fixture = TestBed.createComponent(Venasoft1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
