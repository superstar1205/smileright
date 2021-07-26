import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneRecal1Component } from './hygiene-recal1.component';

describe('HygieneRecal1Component', () => {
  let component: HygieneRecal1Component;
  let fixture: ComponentFixture<HygieneRecal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneRecal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneRecal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
