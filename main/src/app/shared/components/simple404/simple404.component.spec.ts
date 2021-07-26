import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simple404Component } from './simple404.component';

describe('Page404Component', () => {
  let component: Simple404Component;
  let fixture: ComponentFixture<Simple404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simple404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simple404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
