import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Venasoft2Component } from './venasoft2.component';

describe('Venasoft2Component', () => {
  let component: Venasoft2Component;
  let fixture: ComponentFixture<Venasoft2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Venasoft2Component]
    });
    fixture = TestBed.createComponent(Venasoft2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
